'use strict';
var config = require('./config'),
  model = require('./model'),
  route = require('./route');

var app = {
  'config': config,
  'model': model,
  'route': route
};

module.exports = app;
