<template>
  <v-container>
    <v-btn
      text
      fab
      small
      color="black"
      @click="navigateTo({ name: 'cart' })"
    >
      <v-icon>
        {{ cartIcon }}
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mdiCartOutline } from '@mdi/js';
export default {
  name: 'AppBarShoppingCart',

  data() {
    return {
      cartIcon: mdiCartOutline
    };
  },

  methods: {
    navigateTo(route) {
      if (route.name !== this.$router.currentRoute.name) {
        this.$router.push(route); // Avoiding redundant navigations to the same location
      }
    }
  }
};
</script>

<style scoped>

</style>
