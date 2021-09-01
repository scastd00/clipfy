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

    <div>
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

      <v-snackbar
        v-model="snackbar"
        :bottom="true"
        outlined
        text
        color="success"
      >
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
          <v-btn
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <v-btn
      color="secondary"
      class="mt-3"
      small
      text
      @click="navigateTo({ name:'password-reset' })"
    >
      Forgot password?
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
      loading: false,
      snackbar: false,
      snackbarText: null,
      timeout: 900
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
        this.snackbarText = `Logged in successfully as ${response.data.user.username}`;
        this.snackbar = true;

        setTimeout(() => {
          this.loading = false;
          this.$router.push({ name: 'home' });
        }, 1000);
      } catch (e) {
        this.loading = false;
        this.error = e.response.data.error;
      }
    },

    dispatchData(data) {
      this.$store.dispatch('setUser', data.user);
      this.$store.dispatch('setToken', data.token);
    },

    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>

</style>
