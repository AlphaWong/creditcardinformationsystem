'use strict';
var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    jade = require('jade'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    morgan = require('morgan'),
    numCPUs = require('os').cpus().length,
    cwd = process.cwd(),
    expire = 60 * 1000 * 60 * 24 * 7;



var app = express();

app.use(morgan('combined'));
app.use(require('compression')());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(require('method-override')());
app.use(require('cookie-parser')('CreditCardinFormationSystem'));

app.use('/', express.static(cwd + '/public', {
    maxAge: expire
}));

app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.get('/*', function (req, res) {
    res.redirect('index.html');
});

var httpServ = http.Server(app),
    server_port = process.env.PORT || process.env.SERVER_PORT || 80,
    server_ip_address = process.env.IP || process.env.SERVER_IP || '0.0.0.0';

httpServ.listen(server_port, server_ip_address);