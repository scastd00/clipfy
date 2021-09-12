<template>
  <v-layout align-center class="green black--text">
    <slot name="smallImg"></slot>
    <v-spacer/>
    <slot name="name"></slot>
    <v-spacer/>
    <slot name="quantity"></slot>
    <v-spacer/>
    <slot name="subtotal"></slot>
    <v-spacer/>
  </v-layout>
</template>

<script>
export default {
  name: 'OrdersCard'
};
</script>

<style scoped>

</style>
