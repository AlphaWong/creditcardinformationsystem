var _ = require('underscore'),
  lib = {};

_.extend(lib, require('./route'));
_.extend(lib, require('./io'));

module.exports = lib;
