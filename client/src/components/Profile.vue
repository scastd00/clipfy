<template>
  <v-layout class="text-left">
    <v-flex xs8 offset-xs2 class="elevation-6 mt-7">
      <!-- Username -->
      <!-- Email -->
      <!-- Change password? -->

      <v-toolbar dark class="accent rounded-t">
        <v-toolbar-title>
          <!-- Todo: add a small icon with the user's avatar -->
          <h1>{{ this.user.username }}</h1>
        </v-toolbar-title>

        <!-- Making toolbar title a text field or display a dialog with the new username -->
        <v-btn
          class="ml-6 elevation-3"
          small
          fab
        >
          <v-icon>
            {{ editUsernameIcon }}
          </v-icon>
        </v-btn>
      </v-toolbar>

      <div class="_userCard">
        <div class="email pl-4 pt-7">
          <span>Account email -- {{ this.user.email }}</span>

          <span class="ml-6">
            <app-dialog>
              <template v-slot:buttonText>
                <span>Change</span>
              </template>

              <template v-slot:title>
                Change email

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
                        {{ infoEmail }}
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
                >
                  Email
                </v-text-field>

                <v-btn
                  color="accent"
                  min-width="110"
                  @click="checkNewEmail"
                >
                  Confirm
                </v-btn>

                <!-- Todo: Print some information about the change (valid, errors, etc.) -->
              </template>
            </app-dialog>
          </span>
        </div>

        <div class="password pl-4 pt-3">

        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import {
  mdiAccountEdit,
  mdiFingerprint,
  mdiInformation
} from '@mdi/js';
import AppDialog from '@components/AppDialog';

export default {
  name: 'Profile',

  components: {
    AppDialog
  },

  data() {
    return {
      email: '',
      user: this.$store.state.user,
      infoEmail: mdiInformation,
      passwordIcon: mdiFingerprint,
      editUsernameIcon: mdiAccountEdit
    };
  },

  methods: {
    checkNewEmail() {
      // Todo
      return false;
    }
  }
};
</script>

<style scoped>

</style>
