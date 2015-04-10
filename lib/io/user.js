'use strict';
var mongoose = require('mongoose');

var User = mongoose.model('User', {
    id: String,
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
    },
    pwdHash: String,
    pwdSalt: String
});

var Role = mongoose.model('Role', {

});
