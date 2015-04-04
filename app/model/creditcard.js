'use strict';
var mongoose = require('mongoose');

var IssuingBank = mongoose.model('IssuingBank', {
  name: String,
  shortName: String
});

var CreditCard = mongoose.model('CreditCard', {
  name: {
    type: String,
    index: true
  },
  issuingBank: String,
  creditCardAssociation: String,
  AnnualIncome: Number,
  features: [String],
  update_at: {
    type: Date,
    default: new Date()
  },
  create_at: {
    type: Date,
    default: new Date()
  }
});

var CreditCardWelcomeOffer = mongoose.model('CreditCardWelcomeOffer', {
  start_at: Date,
  end_at: Date,
  criteria: [String],
  offer: [String],
  update_at: {
    type: Date,
    default: new Date()
  },
  create_at: {
    type: Date,
    default: new Date()
  }
});

var Post = mongoose.model('Post', {
  title: String,
  author: String,
  content: String,
  merchant: String,
  tag: [String],
  update_at: {
    type: Date,
    default: new Date()
  },
  create_at: {
    type: Date,
    default: new Date()
  }
});

var User = mongoose.model('User', {})

module.exports = {
  "IssuingBank": IssuingBank,
  "CreditCard": CreditCard,
  "CreditCardWelcomeOffer": CreditCardWelcomeOffer,
  "Post": Post,
  "User": User
}
