const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    });

    const { error } = schema.validate(req.body);

    if (error) { // Error is not null or undefined
      switch (error.details[0].context.key) {
      case 'email':
        res.status(400).send({
          error: 'The email address provided must be valid'
        });
        break;

      case 'password':
        res.status(400).send({
          error: `The password provided failed to match the following rules:
              1. It must contain ONLY the following characters: lower/upper case and numerics.
              2. It must be between 8 and 32 characters in length.`
        });
        break;

      default:
        res.status(400).send({
          error: 'Invalid credentials'
        });
      }
    } else {
      next(); // Executes AuthenticationController.register
    }
  }
};
