const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  create(req, res, next) {
    const schema = Joi.object({
      clipKey: Joi.string().alphanum().min(4).max(4),
      name: Joi.string().min(4).max(18), 
      stock: Joi.number().greater(0),
      price: Joi.number().greater(0),
      description: Joi.string().max(20),
      imageURL: Joi.string().uri()
    });

    const { error } = schema.validate(req.body);

    if (error) {
      res.status(StatusCodes.BAD_REQUEST);

      switch (error.details[0].context.key) {
        case 'clipKey':
          res.send({
            error: 'The key must be 4 characters long and be alphanumeric'
          });
          break;

        case 'name':
          res.send({
            error: 'The name must be between 4 and 18 characters long and alphanumeric'
          });
          break;

        case 'stock':
          res.send({
            error: 'Stock must be a number greater than 0'
          });
          break;

        case 'price':
          res.send({
            error: 'Price must be a number greater than 0'
          });
          break;

        case 'description':
          res.send({
            error: 'Description must be alphanumeric and a maximum length of 20 characters'
          });
          break;

        case 'imageURL':
          res.send({
            error: 'Image URL must be a valid URL'
          });
          break;
      }
    } else {
      next();
    }
  }
};
