'use strict';
var express = require('express'),
  router = express.Router(),
  CreditCard = require('../model').CreditCard;

router.get('/*', function(req, res) {
  res.send('Hello');
});

router.get('/page/:page_no', function(req, res) {
  CreditCard.find({}).skip().limit().exec(function(err, result) {
    if (err) {
      return res.status(404).end();
    }
    return res.json(result);
  });
});

router.get('/post/:creditcard_id', function(req, res) {
  CreditCard.findOnce({
    name: creditcard_id
  }).exec(function(err, result) {
    if (err) {
      return res.status(404).end();
    }
    return res.json(result);
  });
});

module.exports = {
  key: 'creditcard',
  'router': router
};
