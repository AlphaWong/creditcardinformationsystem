'use strict';

function isLoggedIn(req, res, next) {
    return next();
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = {
    'isLoggedIn': isLoggedIn
};
