<template>
  <v-layout class="text-left">
    <v-flex xs8 offset-xs2 class="elevation-6 mt-7">
      <v-toolbar dark class="accent rounded-t">
        <v-toolbar-title>
          <!-- Todo: add a small icon with the user's avatar -->
          <h1>{{ newUser.username }}</h1>
        </v-toolbar-title>

        <!-- Making toolbar title a text field or display a dialog with the new username -->
        <span class="username ml-4">
          <app-dialog>
            <template v-slot:buttonText>
              <v-icon>
                {{ editUsernameIcon }}
              </v-icon>
            </template>

            <template v-slot:title>
              <strong>Change username</strong>
            </template>

            <template v-slot:content>
              <v-text-field
                label="Username"
                v-model="username"
              />

              <v-btn
                color="accent"
                min-width="110"
                @click="changeUsername"
              >
                Confirm
              </v-btn>

              <div
                v-if="!!error"
                class="mt-5"
              >
                <v-alert type="error">
                  Error: {{ error }}
                </v-alert>
              </div>
            </template>
          </app-dialog>
        </span>
      </v-toolbar>

      <div class="_userCard">
        <div class="email pl-4 pt-7">
          <span>Account email -- {{ newUser.email }}</span>

          <span class="ml-4">
            <app-dialog>
              <template v-slot:buttonText>
                <span>Change</span>
              </template>

              <template v-slot:title>
                <strong>Change email</strong>

                <!-- Information icon  -->
                <template>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        color="warning"
                        v-bind="attrs"
                        v-on="on"
                        class="ml-3"
                      >
                        {{ infoTooltipIcon }}
                      </v-icon>
                    </template>
                    <span>
                      If you change the account email, you will
                      <br/>
                      receive a message to check that it is valid
                    </span>
                  </v-tooltip>
                </template>
              </template>

              <template v-slot:content>
                <v-text-field
                  label="Email"
                  v-model="email"
                />

                <v-btn
                  color="accent"
                  min-width="110"
                  @click="changeEmail"
                >
                  Confirm
                </v-btn>

                <div
                  v-if="!!error"
                  class="mt-5"
                >
                  <v-alert type="error">
                    Error: {{ error }}
                  </v-alert>
                </div>
              </template>
            </app-dialog>
          </span>
        </div>

        <div class="password pl-4 pt-5 pb-7">
          <span>Password</span>

          <span class="ml-4">
            <app-dialog>
              <template v-slot:buttonText>
                <span>Change</span>
              </template>

              <template v-slot:title>
                <strong>Change password</strong>

                <!-- Information icon  -->
                <template>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        color="warning"
                        v-bind="attrs"
                        v-on="on"
                        class="ml-3"
                      >
                        {{ infoTooltipIcon }}
                      </v-icon>
                    </template>
                    <span>
                      Password <!-- Todo -->
                    </span>
                  </v-tooltip>
                </template>
              </template>

              <template v-slot:content>
                <v-text-field
                  label="Current password"
                  type="password"
                  v-model="password"
                />

                <v-text-field
                  label="New password"
                  type="password"
                  v-model="newPassword"
                />

                <v-text-field
                  label="Verify password"
                  type="password"
                  v-model="verifyPassword"
                />

                <v-btn
                  color="accent"
                  min-width="110"
                  @click="changePassword"
                >
                  Confirm
                </v-btn>

                <div
                  v-if="!!error"
                  class="mt-5"
                >
                  <v-alert type="error">
                    Error: {{ error }}
                  </v-alert>
                </div>
              </template>
            </app-dialog>
          </span>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiAccountEdit, mdiInformation } from '@mdi/js';
import AppDialog from '@components/AppDialog';
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Profile',

  components: {
    AppDialog
  },

  data() {
    return {
      username: this.$store.state.user.username,
      email: this.$store.state.user.email,
      password: '',
      newPassword: '',
      verifyPassword: '',
      error: null,
      infoTooltipIcon: mdiInformation,
      editUsernameIcon: mdiAccountEdit
    };
  },

  computed: {
    newUser: function() {
      return this.$store.state.user;
    }
  },

  methods: {
    async changeEmail() {
      const currentUser = this.$store.state.user;

      if (this.email === currentUser.email) {
        this.error = 'New email should be different from the current one';
      } else {
        try {
          const response = await AuthenticationService.changeEmail({
            oldEmail: currentUser.email,
            newEmail: this.email
          });

          await this.$store.dispatch('setUserEmail', response.data.email);

          this.error = null;
          await this.$router.push({ name: 'profile' });
        } catch (e) {
          this.error = e.response.data.error;
        }
      }
    },

    async changeUsername() {
      const user = this.$store.state.user;

      if (this.username === user.username) {
        this.error = 'The new username should be different from the current one';
      } else {
        try {
          const response = await AuthenticationService.changeUsername({
            email: user.email,
            newUsername: this.username
          });

          await this.$store.dispatch('setUserUsername', response.data.username);

          this.error = null;
        } catch (e) {
          this.error = e.response.data.error;
        }
      }
    },

    async changePassword() {
      if (this.newPassword !== this.verifyPassword) {
        this.error = 'Passwords do not match';
      } else {
        const user = this.$store.state.user;

        try {
          const response = await AuthenticationService.changePassword({
            userEmail: user.email,
            password: this.password,
            newPassword: this.newPassword
          });

          await this.$store.dispatch('setUserPassword', response.data.encryptedPassword);

          this.error = null;
        } catch (e) {
          this.error = e.response.data.error;
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
