<template>
  <credentials-card title="Login">
    <form name="clipfy-login">
      <v-text-field
        label="Email"
        v-model="email"
      />

      <v-text-field
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
      class="accent elevation-2"
      @click="login"
    >
      Login
    </v-btn>
  </credentials-card>
</template>

<script>
import CredentialsCard from '@components/CredentialsCard';
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },

  components: {
    CredentialsCard
  },

  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        await this.$store.dispatch('setUser', {
          user: response.data.user
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
