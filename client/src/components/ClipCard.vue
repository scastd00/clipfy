<template>
  <div class="mx-6 elevation-4 _clipCard">
    <div class="pt-5">
      <slot name="image"></slot>
    </div>

    <h2>
      <slot name="title">Title</slot>
    </h2>

    <div>
      <slot name="price"></slot>
    </div>

    <div>
      <small>
        <slot name="shortDescription">Short description</slot>
      </small>
    </div>

    <div class="mt-3">
      <slot name="buyNowButton"></slot>
      <slot name="addToCartButton"></slot>
    </div>

    <div class="mt-3 pb-3">
      <!-- Information about the product. Stock (green), low stock (yellow) and not available (red) -->
      <slot name="clipInfo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClipCard'
};
</script>

<style scoped>

</style>
