const { StatusCodes } = require('http-status-codes');

function notFound(req, res, next) {
  const error = new Error(`${req.originalUrl} Not found.`);
  res.status(StatusCodes.NOT_FOUND);
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(res.statusCode || StatusCodes.INTERNAL_SERVER_ERROR);
  res.json({
    message: error.message,
    error: process.env.NODE_ENV === 'production' ? {} : error.stack
  });
}

module.exports = {
  notFound,
  errorHandler
};
