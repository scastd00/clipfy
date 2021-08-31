const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(20),
      email: Joi.string().email(),
      password: Joi.string().alphanum().min(8).max(32)
    });

    const { error } = schema.validate(req.body);

    if (error) { // Error is not null or undefined
      switch (error.details[0].context.key) {
        case 'username':
          res.status(StatusCodes.BAD_REQUEST).send({
            error: 'Username must contain only alphanumeric characters and must be between 3 and 20 characters.'
          });
          break;

        case 'email':
          res.status(StatusCodes.BAD_REQUEST).send({
            error: 'The email address provided must be valid.'
          });
          break;

        case 'password':
          res.status(StatusCodes.BAD_REQUEST).send({
            error: `The password provided failed to match the following rules:
              1. It must contain ONLY the following characters: lower/upper case and numerics.
              2. It must be between 8 and 32 characters in length.`
          });
          break;

        default:
          res.status(StatusCodes.BAD_REQUEST).send({
            error: 'Invalid credentials.'
          });
      }
    } else {
      next(); // Executes AuthenticationController.register
    }
  },

  changeEmail(req, res, next) {
    const schema = Joi.object({
      newEmail: Joi.string().email(),
      oldEmail: Joi.string().email()
    });

    const { error } = schema.validate(req.body);

    if (error) {
      res.status(StatusCodes.BAD_REQUEST).send({
        error: 'The email address provided is not valid.'
      });
    } else {
      next(); // Executes AuthenticationController.changeEmail
    }
  },

  changeUsername(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      newUsername: Joi.string().alphanum().min(3).max(20)
    });

    const { error } = schema.validate(req.body);

    if (error) {
      res.status(StatusCodes.BAD_REQUEST).send({
        error: 'New username does not meet the requirements (alphanumeric, 3-20 characters in length).'
      });
    } else {
      next(); // Executes AuthenticationController.changeUsername
    }
  },

  changePassword(req, res, next) {
    const schema = Joi.object({
      userEmail: Joi.string().email(),
      password: Joi.string().alphanum().min(3).max(20),
      newPassword: Joi.string().alphanum().min(3).max(20)
    });

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case 'password':
          res.status(StatusCodes.BAD_REQUEST).send({
            error: 'Your password does not meet the requirements.'
          });
          break;

        case 'newPassword':
          res.status(StatusCodes.BAD_REQUEST).send({
            error: 'New password is invalid (alphanumeric, 3-20 characters in length).'
          });
          break;

        default:
          res.status(StatusCodes.BAD_REQUEST).send({
            error: 'Invalid credentials.'
          });
      }
    } else {
      next();
    }
  },

  resetPassword(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email()
    });

    const { error } = schema.validate(req.body);

    if (error) {
      res.status(StatusCodes.BAD_REQUEST).send({
        error: 'The email address is invalid.'
      });
    } else {
      next();
    }
  }
};
