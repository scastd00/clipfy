import Api from './Api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },

  login(credentials) {
    return Api().post('login', credentials);
  },

  changeEmail(emails) {
    return Api().post('changeEmail', emails);
  },

  changeUsername(information) {
    return Api().post('changeUsername', information);
  },

  changePassword(passwords) {
    return Api().post('changePassword', passwords);
  },

  resetPassword(email) {
    return Api().post('resetPassword', email);
  }
};
