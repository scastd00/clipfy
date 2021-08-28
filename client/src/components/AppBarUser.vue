<template>
  <v-container>
    <v-menu>
      <template v-slot:activator="{ attrs, on }">
        <!-- Todo: Hacer v-extension-panel -->
        <v-btn
          class="elevation-0 ml-1 mr-1 accent"
          v-bind="attrs"
          v-on="on"
          small
          fab
        >
          <v-icon>
            {{ userIcon }}
          </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="option in activeUserOptions"
          :key="option.index"
          @click="navigateTo({ name: option.title.toLowerCase()})"
          link
          dense
        >
          <v-list-item-title class="text-left" v-text="option.title"/>

          <v-icon class="pl-4">
            {{ option.icon }}
          </v-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template>

<script>
import {
  mdiAccount,
  mdiLogin,
  mdiBagPersonal,
  mdiLogout,
  mdiBadgeAccount,
  mdiCardBulleted,
  mdiCheckbook
} from '@mdi/js';

export default {
  name: 'NavigationUser',

  data() {
    return {
      userIcon: mdiAccount
    };
  },

  computed: {
    userOptions: function() {
      const isUserLoggedIn = this.$store.state.isUserLoggedIn;

      return [
        {
          title: 'Login',
          index: 0,
          isAccessible: !isUserLoggedIn,
          icon: mdiLogin
        },
        {
          title: 'Register',
          index: 1,
          isAccessible: !isUserLoggedIn,
          icon: mdiBagPersonal
        },
        {
          title: 'Profile',
          index: 2,
          isAccessible: isUserLoggedIn,
          icon: mdiBadgeAccount
        },
        {
          title: 'Orders',
          index: 3,
          isAccessible: isUserLoggedIn,
          icon: mdiCardBulleted
        },
        {
          title: 'Wishlist',
          index: 4,
          isAccessible: isUserLoggedIn,
          icon: mdiCheckbook
        },
        {
          title: 'Logout',
          index: 5,
          isAccessible: isUserLoggedIn,
          icon: mdiLogout
        }
      ];
    },

    activeUserOptions: function() {
      let optionsAux = JSON.parse(JSON.stringify(this.userOptions));
      return optionsAux.filter((option) => {
        if (option.isAccessible) {
          return option;
        }
      });
    },
  },

  methods: {
    navigateTo(route) {
      if (route.name === 'logout') {
        this.$store.dispatch('clearData');
      }

      if (route.name !== this.$router.currentRoute.name) {
        this.$router.push(route); // Avoiding redundant navigations to the same location
      }
    }
  }
};
</script>

<style scoped>

</style>
