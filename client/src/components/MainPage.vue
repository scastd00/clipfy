<template>
  <div class="mt-4">
    <h1>{{ msg }}</h1>

    <br/>
    <br/>

    <v-row class="mx-16 px-16">
      <!-- Example -->

      <v-col>
        <clip-card>
          <template v-slot:title>
            Clip 1
          </template>
          <template v-slot:image>
            <img width="200" height="200" src="../assets/White.png" alt="hola"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn class="green pr-5">
              Buy now
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
            Not available
          </template>
        </clip-card>
      </v-col>

      <!-- End of example -->

      <v-col>
        <clip-card>
          <template v-slot:title>
            Clip 1
          </template>
          <template v-slot:image>
            <img width="200" height="200" src="../assets/Grey.png" alt="hola"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn class="green pr-5">
              Buy now
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
            Not available
          </template>
        </clip-card>
      </v-col>

      <!-- -->
      <v-col>
        <clip-card>
          <template v-slot:title>
            Clip 3
          </template>
        </clip-card>
      </v-col>
      <v-col>
        <clip-card>
          <template v-slot:title>
            Clip 4
          </template>
        </clip-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ClipCard from '@components/ClipCard';
import { mdiCartPlus } from '@mdi/js';

export default {
  name: 'MainPage',

  components: {
    ClipCard
  },

  data() {
    return {
      msg: 'Bienvenido a Clipfy',
      url: '',
      cartIcon: mdiCartPlus
    };
  }
};
</script>

<style scoped>

</style>
