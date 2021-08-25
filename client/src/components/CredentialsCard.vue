<template>
  <div>
    <v-toolbar
      rounded
      elevation="1"
      block
      dark
    >
      <v-toolbar-title class="primary--text">
        {{ title }}
      </v-toolbar-title>

      <slot name="action"></slot>
    </v-toolbar>

    <div class="elevation-3 pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CredentialsCard',

  props: {
    title: String
  }
};
</script>

<style scoped>

</style>
