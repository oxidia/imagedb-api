'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();
const mongodbLogInfo = require('./utils/app').logInfo('mongodb');

require('./config/mongo')
  .connect()
  .then(() => mongodbLogInfo('Database connected'))
  .catch(err => mongodbLogInfo(err.message));

const appMiddlewares = require('./middlewares/app');

app.use(logger('dev'));
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(appMiddlewares.notFound);

app.use(appMiddlewares.error);

module.exports = app;
