<template>
  <div class="green">
    <slot name="name"></slot>
    <slot name="smallImg"></slot>
    <slot name="quantity"></slot>
    <slot name="description"></slot>
  </div>
</template>

<script>
export default {
  name: 'OrdersCard'
};
</script>

<style scoped>

</style>
