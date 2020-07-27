const mongoose = require('mongoose');
const dbConfig = require('../config/db.config.js');

// (?) Must check this
mongoose.Promise = global.Promise;

// Creating the database object
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.transactions = require('./transactions.model.js')(mongoose);

module.exports = db;
