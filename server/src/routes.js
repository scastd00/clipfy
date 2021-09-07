const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const AuthenticationController = require('./controllers/AuthenticationController');
const ClipsController = require('./controllers/ClipsController');
const ClipsControllerPolicy = require('./policies/ClipsControllerPolicy');

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/login', AuthenticationController.login);

  app.put('/changeEmail', AuthenticationControllerPolicy.changeEmail, AuthenticationController.changeEmail);
  app.put('/changeUsername', AuthenticationControllerPolicy.changeUsername, AuthenticationController.changeUsername);
  app.put('/changePassword', AuthenticationControllerPolicy.changePassword, AuthenticationController.changePassword);
  app.put('/resetPassword', AuthenticationControllerPolicy.resetPassword, AuthenticationController.resetPassword);

  app.get('/clips/getAll', ClipsController.getAllClips);
  app.get('/clips/getAvailable', ClipsController.getAvailableClips);
  app.post('/clips/create', ClipsControllerPolicy.create, ClipsController.addClip);
};
