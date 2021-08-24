<template>
  <div>
    <v-tooltip
      v-if="!$vuetify.theme.dark"
      bottom
    >
      <template
        v-slot:activator="{ on }"
      >
        <v-btn
          class="switcherBTN"
          v-on="on"
          dark
          small
          fab
          @click="darkMode"
        >
          <v-icon
            class="mr-1"
          >
            mdi-moon-waxing-crescent
          </v-icon>
        </v-btn>
      </template>
      <span>
        Dark Mode
      </span>
    </v-tooltip>

    <v-tooltip
      v-else
      bottom
    >
      <template
        v-slot:activator="{ on }"
      >
        <v-btn
          v-on="on"
          light
          small
          fab
          @click="darkMode"
        >
          <v-icon
            color="black"
          >
            mdi-white-balance-sunny
          </v-icon>
        </v-btn>
      </template>
      <span>
        Light Mode
      </span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
    name: 'ThemeSwitcher',

    methods: {
        darkMode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    }
};
</script>

<style scoped>

</style>
