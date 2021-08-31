const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { StatusCodes } = require('http-status-codes');

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
          error: 'User does not exist in the database.'
        });
      }

      const isValidPassword = await user.validatePassword(password);

      if (!isValidPassword) {
        return res.status(StatusCodes.UNAUTHORIZED).send({
          error: 'Invalid password.'
        });
      }

      const userJson = user.toJSON();

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'Invalid login information.'
      });
    }
  },

  async changeEmail(req, res) {
    try {
      const { newEmail, oldEmail } = req.body;

      await User.update({
        email: newEmail
      }, {
        where: {
          email: oldEmail
        }
      });

      res.send({
        email: newEmail
      });
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'Sorry. Cannot proceed with the change, try it again later.'
      });
    }
  },

  async changeUsername(req, res) {
    try {
      const { email, newUsername } = req.body;

      await User.update({
        username: newUsername
      }, {
        where: {
          email: email
        }
      });

      res.send({
        username: newUsername
      });
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'Cannot change username, try it again later.'
      });
    }
  },

  async changePassword(req, res) {
    try {
      const { userEmail, password, newPassword } = req.body;

      const user = await User.findOne({
        where: {
          email: userEmail
        }
      });

      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).send({
          error: 'User not found.'
        });
      }

      const isValidPassword = await user.validatePassword(password);

      if (!isValidPassword) {
        return res.status(StatusCodes.UNAUTHORIZED).send({
          error: 'Invalid account password'
        });
      }

      user.password = newPassword;
      await user.save();

      res.send({
        user: user.toJSON()
      });
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'Cannot change password, try it again later.'
      });
    }
  },

  async resetPassword(req, res) {
    try {
      const { email } = req.body;

      const user = await User.findOne({
        where: {
          email: email
        }
      });

      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).send({
          error: 'This email address is not registered.'
        });
      }

      res.send({
        user: user
      });
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'Cannot reset password, try again later.'
      });
    }
  }
};
