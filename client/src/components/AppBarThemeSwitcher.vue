<template>
  <v-container>
    <!-- Dark mode -> Light mode -->
    <v-tooltip
      v-if="$vuetify.theme.dark"
      bottom
    >
      <template
        v-slot:activator="{ on }"
      >
        <v-btn
          class="transparent elevation-0"
          v-on="on"
          small
          fab
          @click="darkMode"
        >
          <v-icon
            color="yellow"
          >
            {{ darkThemeIcon }}
          </v-icon>
        </v-btn>
      </template>

      <span>
        Light Mode
      </span>
    </v-tooltip>

    <!-- Light mode -> Dark mode -->
    <v-tooltip
      v-else
      bottom
    >
      <template
        v-slot:activator="{ on }"
      >
        <v-btn
          class="transparent elevation-0"
          v-on="on"
          small
          fab
          @click="darkMode"
        >
          <v-icon
            color="black"
          >
            {{ lightThemeIcon }}
          </v-icon>
        </v-btn>
      </template>

      <span>
        Dark Mode
      </span>
    </v-tooltip>
  </v-container>
</template>

<script>
import { mdiMoonWaningCrescent, mdiWhiteBalanceSunny } from '@mdi/js';

export default {
  name: 'ThemeSwitcher',

  data() {
    return {
      lightThemeIcon: mdiMoonWaningCrescent,
      darkThemeIcon: mdiWhiteBalanceSunny
    };
  },

  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>

</style>
