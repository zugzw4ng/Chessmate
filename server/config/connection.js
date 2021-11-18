const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URI || 'mongodb://localhost/chessmate',
);

module.exports = mongoose.connection;