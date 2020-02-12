'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const appMiddlewares = require('./middlewares/app');

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(appMiddlewares.notFound);

app.use(appMiddlewares.error);

module.exports = app;
