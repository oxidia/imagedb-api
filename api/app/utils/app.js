'use strict';

const debug = require('debug');

exports.logInfo = prefix => debug(`${prefix}:info`);

exports.logDev = prefix => debug(`${prefix}:dev`);

exports.logError = prefix => debug(`${prefix}:error`);
