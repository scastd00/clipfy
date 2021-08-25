<template>
  <v-toolbar
    block
    class="primary"
  >
    <v-toolbar-items>
      <v-btn
        class="elevation-0 transparent pl-4 clipfy-home"
        @click="navigateTo({
          name: $store.state.isUserLoggedIn ? 'home' : 'landing'
        })"
      >
        Clipfy
      </v-btn>
    </v-toolbar-items>

    <v-spacer/>

    <v-toolbar-items>
      <app-bar-theme-switcher/>
      <app-bar-user/>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
import AppBarThemeSwitcher from '@components/AppBarThemeSwitcher';
import AppBarUser from '@components/AppBarUser';

export default {
  name: 'NavigationBar',

  components: {
    AppBarThemeSwitcher,
    AppBarUser
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
.clipfy-home {
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: bold;
}
</style>
