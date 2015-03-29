'use strict';
var http = require('http'),
  fs = require('fs'),
  express = require('express'),
  jade = require('jade'),
  cluster = require('cluster'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  numCPUs = require('os').cpus().length,
  cwd = process.cwd(),
  expire = 60 * 1000 * 60 * 24 * 7;


if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
    cluster.fork();
  });

} else {
  var app = express();

  app.use(require('compression')());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.use(require('cookie-parser')('CreditCardinFormationSystem'));

  app.use('/js', express.static(cwd + '/public/js', {
    maxAge: expire
  }));

  app.use('/css', express.static(cwd + '/public/css', {
    maxAge: expire
  }));

  app.use('/fonts', express.static(cwd + '/public/fonts', {
    maxAge: expire
  }));

  app.set('view engine', 'jade');
  app.engine('jade', require('jade').__express);

  app.get('/*', function(req, res) {
    res.send('Hello World!!!');
  });

  var httpServ = http.Server(app),
    server_port = process.env.PORT || process.env.SERVER_PORT || 80,
    server_ip_address = process.env.IP || process.env.SERVER_IP || '0.0.0.0';

  httpServ.listen(server_port, server_ip_address);
}
