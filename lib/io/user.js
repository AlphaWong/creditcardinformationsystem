'use strict';
var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: String,
  createBy: String,
  role: String,
  update_at: {
    type: Date,
    default: new Date()
  },
  create_at: {
    type: Date,
    default: new Date()
  }
})

var Role = mongoose.model('Role', {
  
});
