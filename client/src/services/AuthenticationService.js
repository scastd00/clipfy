import Api from './Api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },

  login(credentials) {
    return Api().post('login', credentials);
  },

  changeEmail(emails) {
    return Api().put('changeEmail', emails);
  },

  changeUsername(information) {
    return Api().put('changeUsername', information);
  },

  changePassword(passwords) {
    return Api().put('changePassword', passwords);
  },

  resetPassword(email) {
    return Api().put('resetPassword', email);
  }
};
