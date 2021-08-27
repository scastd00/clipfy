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
      :loading="loading"
      :disabled="loading"
      class="accent elevation-2"
      @click="login"
      width="16%"
      min-width="150"
    >
      Login
      <template v-slot:loader>
        <span>
          Logging in...
        </span>
      </template>
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
      error: null,
      loading: false
    };
  },

  components: {
    CredentialsCard
  },

  methods: {
    async login() {
      try {
        this.loading = true;
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        await this.dispatchData(response.data);

        this.error = null; // Clear the error when data is entered correctly

        setTimeout(() => {
          this.loading = false;
          this.$router.push({ name: 'home' });
        }, 1000);
      } catch (e) {
        this.error = e.response.data.error;
        this.loading = false;
      }
    },

    dispatchData(data) {
      this.$store.dispatch('setUser', data.user);
      this.$store.dispatch('setToken', data.token);
    }
  }
};
</script>

<style scoped>

</style>
