'use strict';

const logError = require('../utils/app').logError('app');
const createError = require('http-errors');

const {
  HTTP_NOT_FOUND,
  HTTP_INTERNAL_SERVER_ERROR
} = require('../utils/http-status');

exports.notFound = (req, res, next) => {
  const error = createError(HTTP_NOT_FOUND);

  next(error);
};

exports.error = (error, req, res, next) => {
  logError(error);

  const newError = createError(error.status || HTTP_INTERNAL_SERVER_ERROR);

  res.status(newError.status).send({
    message: newError.message
  });
};
