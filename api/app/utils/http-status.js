'use strict';

/**
 * 2xx Success
 */
exports.HTTP_OK = 200;
exports.HTTP_CREATED = 201;

/**
 * 4xx Client errors
 */
exports.HTTP_BAD_REQUEST = 400;
exports.HTTP_UNAUTHORIZED = 401;
exports.HTTP_FORBIDDEN = 403;
exports.HTTP_NOT_FOUND = 404;
exports.HTTP_TOO_MANY_REQUESTS = 429;

/**
 * 5xx Server errors
 */
exports.HTTP_INTERNAL_SERVER_ERROR = 500;
exports.HTTP_NOT_IMPLEMENTED = 501;
exports.HTTP_SERVICE_UNVAILABLE = 503;
