const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: config.authentication.expirationTime
  });
}

module.exports = {
  async register(req, res) {
    try {
      const userJson = await User.create(req.body).toJSON();

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (e) {
      res.status(400).send({
        error: 'This email account is already in use. Please try again.'
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });

      if (!user) {
        return res.status(404).send({
          error: 'User does not exist in the database'
        });
      }

      const isValidPassword = await user.validatePassword(password);

      if (!isValidPassword) {
        return res.status(401).send({
          error: 'Invalid password'
        });
      }

      const userJson = user.toJSON();

      res.status(200).send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (e) {
      res.status(500).send({
        error: 'Invalid login information'
      });
    }
  }
};
