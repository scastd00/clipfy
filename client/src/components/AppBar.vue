<template>
  <v-app-bar
    block
    class="primary"
    fixed
    app
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
      <app-bar-shopping-cart v-if="$store.state.isUserLoggedIn"/>
      <app-bar-user/>
    </v-toolbar-items>

  </v-app-bar>
</template>

<script>
import AppBarShoppingCart from '@components/AppBarShoppingCart';
import AppBarThemeSwitcher from '@components/AppBarThemeSwitcher';
import AppBarUser from '@components/AppBarUser';

export default {
  name: 'NavigationBar',

  components: {
    AppBarShoppingCart,
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
  transition: color 0.3s; /* Animation when hover off */
}

.clipfy-home:hover {
  color: black;
  transition: color 0.3s; /* Animation when hover on */
}
</style>
