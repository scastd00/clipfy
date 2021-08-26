import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isUserLoggedIn = !!token;
    },

    setUser(state, userData) {
      state.user = userData.user;
    }
  },

  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },

    setUser({ commit }, userData) {
      commit('setUser', userData);
    },

    clearData({commit}) {
      commit('setToken', null);
      commit('setUser', null);
    }
  }
});
