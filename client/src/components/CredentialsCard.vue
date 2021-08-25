<template>
  <div>
    <v-toolbar
      block
      dark
      class="accent rounded-t elevation-0"
    >
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>

      <slot name="action"></slot>
    </v-toolbar>

    <div class="elevation-3 pl-4 pr-4 pt-2 pb-2 _credentials rounded-b">
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
