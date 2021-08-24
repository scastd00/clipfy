<template>
  <v-toolbar
    block
    class="primary"
  >
    <v-toolbar-title
      class="clipfy-home"
      @click="navigateTo({ name: 'MainPage' })"
    >
      Clipfy
    </v-toolbar-title>

    <v-spacer/>

    <v-toolbar-items>
      <theme-switcher/>
      <navigation-user/>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
import ThemeSwitcher from '@components/ThemeSwitcher';
import NavigationUser from '@components/NavigationUser';

export default {
  name: 'NavigationBar',

  components: {
    ThemeSwitcher,
    NavigationUser
  },

  methods: {
    navigateTo(route) {
      if (this.$router.currentRoute.name !== 'MainPage') {
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
