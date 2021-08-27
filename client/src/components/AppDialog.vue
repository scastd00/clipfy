<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-top-transition"
    persistent
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="info"
        v-bind="attrs"
        v-on="on"
      >
        <slot name="buttonText"></slot>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h4">
        <slot name="title"></slot>
      </v-card-title>

      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="accent lighten-2"
          @click="dialog = false"
          text
        >
          Cancel
        </v-btn>
        <v-btn
          color="accent lighten-2"
          @click="dialog = false"
          text
        >
          Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AppDialog',

  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped>

</style>
