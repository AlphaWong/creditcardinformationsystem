'use strict';

var _ = require('underscore'),
    mongoose = require('mongoose'),
    cwd = process.cwd(),
    config = require(cwd + '/app/config'),
    connStr = 'mongodb://';

if (config.username && config.password) connStr += config.username + ':' + config.password + '@';

connStr += (config.dbAddr || 'localhost');

if (config.dbPort) connStr += ':' + config.dbPort
connStr += '/' + config.dbName;

mongoose.connect(connStr);
