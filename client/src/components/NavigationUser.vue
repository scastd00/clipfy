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
          <v-list-item-title v-text="option.title"/>
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
        {
          title: 'Login',
          index: 0
        },
        {
          title: 'Register',
          index: 1
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
