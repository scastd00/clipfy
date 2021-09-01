export default {
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
};
