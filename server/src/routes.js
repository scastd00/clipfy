const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/login', AuthenticationController.login);

  app.post('/changeEmail', AuthenticationControllerPolicy.changeEmail, AuthenticationController.changeEmail);
  app.post('/changeUsername', AuthenticationControllerPolicy.changeUsername, AuthenticationController.changeUsername);
  app.post('/changePassword', AuthenticationControllerPolicy.changePassword, AuthenticationController.changePassword);
  app.post('/resetPassword', AuthenticationControllerPolicy.resetPassword, AuthenticationController.resetPassword);

  // app.get('/getClips');
};
