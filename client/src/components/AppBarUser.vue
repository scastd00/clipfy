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
            v-for="option in options"
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
      userIcon: mdiAccount,

      options: [
        { title: 'Login', index: 0 },
        { title: 'Register', index: 1 }
      ]
    };
  },

  methods: {
    navigateTo(route) {
      if (this.$router.currentRoute.name !== route.name) {
        this.$router.push(route);
      }
    }
  }
};
</script>

<style scoped>

</style>
