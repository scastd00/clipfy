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

    setUser(state, user) {
      state.user = user;
    },

    setUserEmail(state, email) {
      state.user.email = email;
    },

    setUserUsername(state, username) {
      state.user.username = username;
    },

    setUserPassword(state, password) {
      state.user.password = password;
    }
  },

  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },

    setUser({ commit }, user) {
      commit('setUser', user);
    },

    setUserEmail({ commit }, email) {
      commit('setUserEmail', email);
    },

    setUserUsername({ commit }, username) {
      commit('setUserUsername', username);
    },

    setUserPassword({ commit }, password) {
      commit('setUserPassword', password);
    },

    clearData({ commit }) {
      commit('setToken', null);
      commit('setUser', null);
    }
  }
});
