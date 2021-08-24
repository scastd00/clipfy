<template>
  <v-toolbar
    block
    class="primary"
  >
    <v-toolbar-title class="clipfy-home">
      <div @click="navigateTo({name: 'MainPage'})">
        Clipfy
      </div>
    </v-toolbar-title>

    <v-spacer/>

    <v-toolbar-items>
      <v-container>
        <theme-switcher/>
      </v-container>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import ThemeSwitcher from '@components/ThemeSwitcher';

export default {
    name: 'NavigationBar',

    components: {
        ThemeSwitcher
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
}
</style>
