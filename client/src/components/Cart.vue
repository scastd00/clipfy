<template>
  <v-layout>
    <v-flex xs10 offset-xs1 class="mt-6">
      <v-toolbar class="transparent text-left elevation-0">
        <v-toolbar-title class="text-h4 pl-6">
          <strong>Shopping cart</strong>
        </v-toolbar-title>
      </v-toolbar>

      <div class="mt-4">
        <v-row v-for="item of cart" :key="item.clip.clipKey" class="my-4">
          <orders-card>
            <template v-slot:smallImg>
              <v-img
                class="my-3 ml-3"
                max-height="130"
                max-width="130"
                :alt="item.clip.clipKey"
                :src="item.clip.imageURL"
              />
            </template>

            <template v-slot:name>
              {{ item.clip.name }}
            </template>

            <template v-slot:quantity>
              <h3>Quantity: {{ item.quantity }}</h3>
            </template>

            <template v-slot:subtotal>
              <h3>Price: {{ subtotalClip(item.clip, item.quantity) }}€</h3>
            </template>
          </orders-card>
        </v-row>
      </div>

      <div class="my-9">
        <h2>Total: {{ totalPrice }}€</h2>
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

      return sum.toFixed(2);
    }
  },

  data() {
    return {
      cart: this.$store.state.user.cart
    };
  },

  methods: {
    subtotalClip(clip, quantity) {
      return (parseFloat(clip.price) * parseFloat(quantity)).toFixed(2);
    }
  }
};
</script>

<style scoped>

</style>
