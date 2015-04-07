'use strict';
var express = require('express'),
    cwd = process.cwd(),
    router = express.Router(),
    model = require('../model'),
    middlewares = require(cwd + '/lib').middleware,
    Post = model.Post,
    CreditCard = model.CreditCard;

router.route('/post/:post_id?')
    .get(function(req, res, next) {
        if (req.params.post_id) {
            Post.findOne({
                post_id: req.params.post_id
            }, function(err, result) {
                return routeHandle(err, req, res, result);
            });
        } else {
            Post.find({}, function(err, result) {
                return routeHandle(err, req, res, result);
            });
        }
    });

// middlewares.forEach(function(middleware) {
//     router.use(middleware);
// });

router.route('/post/:post_id?')
    .post(savePost)
    .put(savePost);

function savePost(req, res) {
    var query = {
        post_id: req.params.post_id || req.body.post_id
    };

    Post.findOneAndUpdate(query, req.body, {
        upsert: true,
        new: true
    }).exec(function(err, result) {
        return routeHandle(err, req, res, result);
    });
}

function routeHandle(err, req, res, result) {
    if (err) return errHandle(err, req, res);
    res.json(result);
}

function errHandle(err, req, res) {
    if (req.xhr) return xhrErrHandle(err, req, res);
    return res.status(404).end();
}

function xhrErrHandle(err, req, res) {
    return res.status(404).end();
}

// router.get('/page/:page_no', function(req, res) {
//     CreditCard.find({}).skip().limit().exec(function(err, result) {
//         if (err) return errHandle(err, req, res);
//         return res.json(result);
//     });
// });

// router.get('/creditcard/:creditcard_id', function(req, res) {
//     CreditCard.findOnce({
//         name: creditcard_id
//     }).exec(function(err, result) {
//         if (err) return errHandle(err, req, res);
//         return res.json(result);
//     });
// });


// router.get('/*', function(req, res) {
//     res.send('Hello');
// });

module.exports = {
    key: 'api/creditcard',
    'router': router
};
