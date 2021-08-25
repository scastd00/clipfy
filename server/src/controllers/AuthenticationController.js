const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
import { StatusCodes } from 'http-status-codes';

function jwtSignUser(user) {
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: config.authentication.expirationTime
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (e) {
      res.status(StatusCodes.BAD_REQUEST).send({
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
        return res.status(StatusCodes.NOT_FOUND).send({
          error: 'User does not exist in the database'
        });
      }

      const isValidPassword = await user.validatePassword(password);

      if (!isValidPassword) {
        return res.status(StatusCodes.UNAUTHORIZED).send({
          error: 'Invalid password'
        });
      }

      const userJson = user.toJSON();

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'Invalid login information'
      });
    }
  }
};
