<template>
  <v-layout class="text-left mt-5">
    <v-flex xs8 offset-xs2>
      <v-toolbar flat>
        <v-toolbar-title class="text-h4">
          <strong class="ml-3">
            My Orders
          </strong>
        </v-toolbar-title>
      </v-toolbar>

      <div>
        <v-container>
          <span>Name</span>
          <span>|</span>
          <span>Item count</span>
          <span>|</span>
          <span>Created at</span>
          <span>|</span>
          <span>Total price</span>
          <span>|</span>
        </v-container>
      </div>

      <!--
        v-container with orders-card
      -->
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Orders'
};
</script>

<style scoped>

</style>
