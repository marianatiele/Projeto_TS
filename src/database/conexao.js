const mongo = require('mongoose')

mongo.connect('mongodb://127.0.0.1:27017/API-Mongo')

mongo.Promise = global.Promise;

module.exports = mongo;