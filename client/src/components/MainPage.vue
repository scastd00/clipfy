<template>
  <div class="mt-4">
    <h1>{{ msg }}</h1>

    <br/>
    <br/>

    <v-row v-for="obj in clips" :key="obj.id">
      <v-col v-for="clip of obj.value" :key="clip.clipKey">
        <clip-card>
          <template v-slot:title>
            {{ clip.name }}
          </template>
          <template v-slot:image>
            <v-img width="250" height="250" :src="clip.imageURL" :alt="clip.name"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn text class="green">
              {{ clip.price }}
            </v-btn>
          </template>
          <template v-slot:addToCartButton>
            <v-btn>
              <v-icon>
                {{ cartIcon }}
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:clipInfo>
            {{ clipInfo(clip) }}
          </template>
        </clip-card>
      </v-col>
    </v-row>

    <br/>
    <!-- Footer (Remove br) -->
  </div>
</template>

<script>
import ClipCard from '@components/ClipCard';
import { mdiCartPlus } from '@mdi/js';
import ClipService from '@/services/ClipService';

export default {
  name: 'MainPage',

  components: {
    ClipCard
  },

  created() {
    const fetchData = async() => {
      this.clips = (await ClipService.getAllClips()).data;
    };

    fetchData();
  },

  data() {
    return {
      msg: 'Bienvenido a Clipfy',
      url: '',
      cartIcon: mdiCartPlus,
      clips: []
    };
  },

  methods: {
    clipInfo(clip) {
      return clip.stock > 0 ? 'Available' : 'Not available';
    }
  }
};
</script>

<style scoped>

</style>
