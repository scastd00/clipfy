import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App';
import router from './router';
import store from '@/store';
import vuetifyTheme from './plugins/vuetify';

import { sync } from 'vuex-router-sync';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuetify);
sync(store, router);

new Vue({
  vuetify: new Vuetify(vuetifyTheme),
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
