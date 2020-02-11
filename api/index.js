'use strict';

const app = require('./app');
const logDev = require('./app/utils/app').logDev('http');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logDev(`listening on ${PORT}`);
});
