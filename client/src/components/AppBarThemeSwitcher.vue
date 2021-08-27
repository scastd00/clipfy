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
          @click="changeTheme"
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
          @click="changeTheme"
          small
          fab
        >
          <v-icon color="black">
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
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>

</style>
