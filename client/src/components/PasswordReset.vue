<template>
  <credentials-card title="Password reset">
    <v-text-field
      label="Email"
      :rules="[required]"
      required
      v-model="email"
    />

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
      @click="passwordReset"
      width="16%"
      min-width="160"
    >
      Submit
      <template v-slot:loader>
        <span>
          ...
        </span>
      </template>
    </v-btn>
  </credentials-card>
</template>

<script>
import CredentialsCard from '@components/CredentialsCard';
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'PasswordReset',

  data() {
    return {
      email: '',
      loading: false,
      error: null,
      required: (value) => !!value || 'Required'
    };
  },

  components: {
    CredentialsCard
  },

  methods: {
    async passwordReset() {
      try {
        this.loading = true;

        const response = await AuthenticationService.resetPassword({
          email: this.email
        });

        console.log(response.data.user);
        this.error = null;

        setTimeout(() => {
          this.loading = false;
          this.$router.push({ name: 'login' });
        }, 700);
      } catch (e) {
        this.error = e.response.data.error;
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>

</style>
