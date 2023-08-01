process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

connect(connectionString);

module.exports = mongoose.connection;
