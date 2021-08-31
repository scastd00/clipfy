<template>
  <credentials-card title="Register">
    <form name="clipfy-register">
      <v-text-field
        counter="20"
        required
        :rules="[required]"
        label="Username"
        v-model="username"
      />

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
      :loading="loading"
      :disabled="loading"
      class="accent elevation-2"
      @click="register"
      width="16%"
      min-width="160"
    >
      Register
      <template v-slot:loader>
        <span>
          Registering...
        </span>
      </template>
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
      username: '',
      email: '',
      password: '',
      error: null,
      loading: false,
      required: (value) => !!value || 'Required'
    };
  },

  components: {
    CredentialsCard
  },

  methods: {
    async register() {
      try {
        this.loading = true;

        const response = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password
        });

        await this.dispatchData(response.data);

        this.error = null; // Clear the error when data is entered correctly

        setTimeout(() => {
          this.loading = false;
          this.$router.push({ name: 'home' });
        }, 700);
      } catch (e) {
        this.error = e.response.data.error;
        this.loading = false;
      }
    },

    dispatchData(data) {
      this.$store.dispatch('setUser', data.user);
      this.$store.dispatch('setToken', data.token);
    },
  }
};
</script>

<style scoped>

</style>
