<template>
  <v-app>
    <v-main>
      <div id="app">
        <navigation-bar/>
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from '@components/AppBar';

export default {
  name: 'App',

  components: {
    NavigationBar
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
