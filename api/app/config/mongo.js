const mongoose = require('mongoose');

module.exports.connect = function() {
  return new Promise((resolve, reject) => {
    const connectionString = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    mongoose.connect(connectionString, options, err => {
      if (err) return reject(err);

      resolve();
    });
  });
};
