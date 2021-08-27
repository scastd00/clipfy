<template>
  <v-layout>
    <v-flex
      xs6
      offset-xs3
      class="mt-7"
    >
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

      <div class="elevation-3 px-4 py-2 _credentials rounded-b">
        <slot>
          No slot content defined.
        </slot>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CredentialsCard',

  props: {
    title: {
      type: String,
      default: 'Credentials'
    }
  }
};
</script>

<style scoped>

</style>
