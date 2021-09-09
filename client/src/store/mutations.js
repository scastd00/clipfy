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
  },

  addClipToCart(state, data) {
    const updateIndex = state.user.cart.findIndex(element => element.clipKey === data.clipKey);

    if (updateIndex !== -1) {
      state.user.cart[updateIndex].quantity++;
    } else {
      state.user.cart.push(data);
    }
  }
};
