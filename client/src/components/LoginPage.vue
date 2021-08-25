<template>
  <v-container>
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-col/>

      <v-col>
        <v-layout>
          <v-flex>

            <credentials-card title="Login">
              <v-text-field
                label="Email"
                v-model="email"
              />

              <v-text-field
                type="password"
                label="Password"
                v-model="password"
              />

              <div
                class="pt-1 pb-1"
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

          </v-flex>
        </v-layout>
      </v-col>

      <v-col/>
    </v-row>
  </v-container>
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

        await this.$store.dispatch('setUser', response.data.user);
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
