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
    post_id: {
        type: String,
        index: true
    },
    title: String,
    issuingBank: {
        type: String,
        index: true
    },
    author: {
        type: String,
        index: true
    },
    content: String,
    merchant: {
        type: String,
        index: true
    },
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
