'use strict';
var express = require('express'),
  passport = require('passport'),
  TwitterStrategy = require('passport-twitter'),
  GoogleStrategy = require('passport-google'),
  FacebookStrategy = require('passport-facebook'),
  router = express.Router();

router.use(passport.initialize());
router.use(passport.session());
router.all('/users', isLoggedIn);
//router.get('/users', user.list);
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}
