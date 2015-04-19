var cwd = process.cwd(),
    http = require('http'),
    fs = require('fs'),
    express = require('express'),
    jade = require('jade'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    morgan = require('morgan'),
    passport = require('passport'),
    _ = require('underscore'),
    passport = require('passport'),
    multer = require('multer'),
    cors = require('cors'),
    TwitterStrategy = require('passport-twitter').Strategy,
    GoogleStrategy = require('passport-google').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    LocalStrategy = require('passport-local').Strategy,
    coreRoute = require('./route'),
    middleware = coreRoute.middleware,
    router = express.Router(),
    CreditCardinFormationSystemApp = require(cwd + '/app'),
    expire = 60 * 1000 * 60 * 24 * 7,
    app = express(),
    lib = {};

_.extend(lib, require('./route'));
_.extend(lib, require('./io'));
module.exports = lib;

app.use(morgan('combined'));
app.use(require('compression')());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(require('method-override')());
app.use(require('cookie-parser')('CreditCardinFormationSystem'));
app.use(cors());
app.use(multer({
    dest: cwd + '/data/uploads/'
}));

// passport.use(new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'passwd'
//     },
//     function(username, password, done) {
//         return done(null, {
//             username: 'admin',
//             password: 'password'
//         });
//     }
// ));
// app.use(passport.initialize());
// app.use(passport.session());
// app.post('/login',
//     passport.authenticate('local', {
//         successRedirect: '/index.html',
//         failureRedirect: '/login',
//         failureFlash: true
//     }));
// app.all('/users', middleware.isLoggedIn);
// app.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });

CreditCardinFormationSystemApp.route.forEach(function(route) {
    app.use('/' + route.key, route.router);
});

app.use('/', cors(), express.static(cwd + '/public', {
    maxAge: expire
}));

app.use('/content',cors(), express.static(cwd + '/data/uploads/', {
    maxAge: expire
}));

var httpServ = http.Server(app),
    server_port = process.env.PORT || process.env.SERVER_PORT || 80,
    server_ip_address = process.env.IP || process.env.SERVER_IP || '0.0.0.0';

httpServ.listen(server_port, server_ip_address);
