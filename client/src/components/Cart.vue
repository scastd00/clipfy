<template>
  <v-layout>
    <v-flex xs10 offset-xs1 class="mt-6">
      <v-toolbar class="transparent text-left elevation-0">
        <v-toolbar-title class="text-h4 pl-6">
          <strong>Shopping cart</strong>
        </v-toolbar-title>
      </v-toolbar>

      <div class="mt-4">
        <v-row v-for="item of cart" :key="item.clip.clipKey" class="my-3" no-gutters>
          <orders-card>
            <template v-slot:name>
              {{ item.clip.name }}
            </template>

            <template v-slot:smallImg>
              <img width="100" height="100" :alt="item.clip.clipKey" :src="item.clip.imageURL"/>
            </template>

            <template v-slot:quantity>
              <h3>Quantity:</h3>
              {{ item.quantity }}
            </template>
          </orders-card>
        </v-row>
      </div>

      <div class="my-9">
        <h2>Total: {{ totalPrice }}</h2>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import OrdersCard from '@components/OrdersCard';

export default {
  name: 'Cart',

  components: {
    OrdersCard
  },

  computed: {
    totalPrice() {
      let sum = 0;

      for (const item of this.cart) {
        sum += parseFloat(item.clip.price) * parseFloat(item.quantity);
      }

      return sum;
    }
  },

  data() {
    return {
      cart: this.$store.state.user.cart
    };
  }
};
</script>

<style scoped>

</style>
