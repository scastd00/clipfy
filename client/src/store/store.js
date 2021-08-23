import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
    },

    mutations: {
        setToken(state, token) {
            state.token = token;
        }
    },

    actions: {
        setToken({commit}, token) {
            commit('setToken', token);
        }
    }
});

export default store;
