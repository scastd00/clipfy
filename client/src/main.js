import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuetify);
sync(store, router);

new Vue({
    vuetify: new Vuetify(),
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
}).$mount('#app');
