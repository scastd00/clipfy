export default {
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
};
