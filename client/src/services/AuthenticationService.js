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
  }
};
