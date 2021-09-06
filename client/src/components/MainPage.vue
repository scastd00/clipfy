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
            <img width="250" height="250" src="../assets/White.png" alt="White"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn text class="green" color="black">
              14.50€
            </v-btn>
          </template>
          <template v-slot:addToCartButton>
            <v-btn text color="secondary">
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
            Clip 2
          </template>
          <template v-slot:image>
            <img width="250" height="250" src="../assets/Grey.png" alt="Grey"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn text class="green" color="black">
              12.70€
            </v-btn>
          </template>
          <template v-slot:addToCartButton>
            <v-btn text color="secondary">
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

    <!-- Examples. Remove after functionality is added. -->
    <v-row class="mx-16 px-16">
      <!-- Example -->

      <v-col>
        <clip-card>
          <template v-slot:title>
            Clip 1
          </template>
          <template v-slot:image>
            <img width="250" height="250" src="../assets/White.png" alt="White"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn class="green">
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
            Clip 2
          </template>
          <template v-slot:image>
            <img width="250" height="250" src="../assets/Grey.png" alt="Grey"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn class="green">
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
    <v-row class="mx-16 px-16">
      <!-- Example -->

      <v-col>
        <clip-card>
          <template v-slot:title>
            Clip 1
          </template>
          <template v-slot:image>
            <img width="250" height="250" src="../assets/White.png" alt="White"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn class="green">
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
            Clip 2
          </template>
          <template v-slot:image>
            <img width="250" height="250" src="../assets/Grey.png" alt="Grey"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn class="green">
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
    <v-row class="mx-16 px-16">
      <!-- Example -->

      <v-col>
        <clip-card>
          <template v-slot:title>
            Clip 1
          </template>
          <template v-slot:image>
            <img width="250" height="250" src="../assets/White.png" alt="White"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn class="green">
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
            Clip 2
          </template>
          <template v-slot:image>
            <img width="250" height="250" src="../assets/Grey.png" alt="Grey"/>
          </template>
          <template v-slot:buyNowButton>
            <v-btn class="green">
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
    <!-- Examples. Remove after functionality is added. -->

    <!--  -->
    <!-- Todo: check for a better key -->
    <v-row v-for="array in clips" :key="array">
      <v-col v-for="clip of array" :key="clip.clipKey">
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
    <!--  -->

    <br/>
    <!-- Footer (Remove br) -->
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
      cartIcon: mdiCartPlus,
      clips: {
        a: [],
        b: []
      }
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
