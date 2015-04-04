'use strict';

var mongoose = require('mongoose'),
  config = require(process.cwd() + '/app/config');

mongoose.connect('mongodb://' + config.dbAddr + '/' + config.dbName);
module.exports = mongoose;
