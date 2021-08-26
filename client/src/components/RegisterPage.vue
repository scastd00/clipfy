<template>
  <credentials-card title="Register">
    <form name="clipfy-register">
<!--      <v-text-field-->
<!--        counter="20"-->
<!--        required-->
<!--        :rules="[required]"-->
<!--        label="Username"-->
<!--        v-model="username"-->
<!--      />-->

      <v-text-field
        required
        :rules="[required]"
        label="Email"
        v-model="email"
      />

      <v-text-field
        counter="32"
        required
        :rules="[required]"
        type="password"
        label="Password"
        v-model="password"
      />
    </form>

    <div
      class="py-1"
      v-if="!!error"
    >
      <v-alert type="error">
        Error: {{ error }}
      </v-alert>
    </div>

    <v-btn
      class="accent"
      @click="register"
    >
      Register
    </v-btn>
  </credentials-card>
</template>

<script>
import CredentialsCard from '@components/CredentialsCard';
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'RegisterPage',

  data() {
    return {
      // username: '',
      email: '',
      password: '',
      error: null,
      required: (value) => !!value || 'Required'
    };
  },

  components: {
    CredentialsCard
  },

  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });

        await this.$store.dispatch('setUser', {
          user: response.data.user,
          // username: response.data.user.username
        });
        await this.$store.dispatch('setToken', response.data.token);

        this.error = null; // Clear the error when data is entered correctly

        await this.$router.push({ name: 'home' });
      } catch (e) {
        this.error = e.response.data.error;
      }
    }
  }
};
</script>

<style scoped>

</style>
