process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

const mongoose = require('mongoose');

module.exports = mongoose.connection;
