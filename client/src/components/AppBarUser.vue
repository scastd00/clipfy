<template>
  <v-container>
    <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          class="elevation-0 ml-1 mr-1 accent"
          v-bind="attrs"
          v-on="on"
          rounded
        >
          <v-icon>{{ userIcon }}</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="option in activeUserOptions"
          :key="option.index"
          link
        >
          <v-list-item-title
            @click="navigateTo({ name: option.title.toLowerCase()})"
            v-text="option.title"
          />
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template>

<script>
import { mdiAccount } from '@mdi/js';

export default {
  name: 'NavigationUser',

  data() {
    return {
      userIcon: mdiAccount
    };
  },

  computed: {
    options: function() {
      return [
        {
          title: 'Login',
          index: 0,
          isAccessible: !this.$store.state.isUserLoggedIn
        },
        {
          title: 'Register',
          index: 1,
          isAccessible: !this.$store.state.isUserLoggedIn
        },
        {
          title: 'Logout',
          index: 2,
          isAccessible: this.$store.state.isUserLoggedIn
        }
      ];
    },

    activeUserOptions: function() {
      let optionsAux = JSON.parse(JSON.stringify(this.options));
      return optionsAux.filter((option) => {
        if (option.isAccessible) {
          return option;
        }
      });
    },

    accessible: function() {
      console.log('Cambia el estado');
      return this.$store.state.isUserLoggedIn;
    }
  },

  methods: {
    navigateTo(route) {
      if (route.name === 'logout') {
        this.$store.dispatch('clearData');
      }
      if (this.$router.currentRoute.name !== route.name) {
        this.$router.push(route); // Avoiding redundant navigations to the same location
      }
    }
  }
};
</script>

<style scoped>

</style>
