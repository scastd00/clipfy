<template>
  <div class="mt-4">
    <h1>{{ msg }}</h1>

    <br/>

    <v-row
      v-for="obj in clips"
      :key="obj.id"
      class="px-15"
    >
      <v-col
        v-for="clip of obj.value"
        :key="clip.clipKey"
        class="px-5 py-8"
      >
        <clip-card>
          <template v-slot:image>
            <v-row>
              <v-col>
                <img width="230" height="230" :src="clip.imageURL" :alt="clip.name"/>
              </v-col>
            </v-row>
          </template>

          <template v-slot:title>
            {{ clip.name }}
          </template>

          <template v-slot:shortDescription>
            {{ clip.description }}
          </template>

          <template v-slot:buyNowButton>
            <v-btn
              text
              class="green"
            >
              Buy now - {{ clip.price }}
            </v-btn>
          </template>

          <template v-slot:addToCartButton>
            <v-tooltip bottom>
              <template
                v-slot:activator="{ on }"
              >
                <v-btn
                  v-on="on"
                  text
                  color="secondary"
                  @click="addClipToCart(clip, 1)"
                >
                  <v-icon>
                    {{ cartIcon }}
                  </v-icon>
                </v-btn>
              </template>

              <span>
                Add to cart
              </span>
            </v-tooltip>
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
import ClipService from '@/services/ClipService';
import { mdiCartPlus } from '@mdi/js';

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
      if (clip.stock >= 20) {
        return 'Available';
      } else if (clip.stock > 0 && clip.stock < 20) {
        return `${ clip.stock } units left`;
      } else {
        return 'No stock';
      }
    },

    async addClipToCart(clip, quantity) {
      await this.$store.dispatch('addClipToCart', {
        clip: clip,
        quantity: quantity
      });
    }
  }
};
</script>

<style scoped>

</style>
