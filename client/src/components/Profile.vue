<template>
  <v-layout class="text-left">
    <v-flex xs8 offset-xs2 class="elevation-6 mt-7">
      <!--      Username  -->
      <!--      Email     -->
      <!--      Change password? -->

      <v-toolbar dark class="accent rounded-t">
        <v-toolbar-title>
          <!-- Todo: add a small icon with the user's avatar -->
          <h1>{{ this.user.username }}</h1>
        </v-toolbar-title>
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
                <!-- Todo: add a form with the email to change. Password to confirm  -->
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
import { mdiFingerprint, mdiInformation } from '@mdi/js';
import AppDialog from '@components/AppDialog';

export default {
  name: 'Profile',

  components: {
    AppDialog
  },

  data() {
    return {
      user: this.$store.state.user,
      infoEmail: mdiInformation,
      passwordIcon: mdiFingerprint
    };
  }
};
</script>

<style scoped>

</style>
