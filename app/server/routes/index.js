// 'use strict';
var path = require('path'),
	express = require('express'),
	session = require('express-session'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express();

// require('./configure')(app);
app.use('/api', require('./route'));
app.use(cookieParser());
app.use(session({secret: 'session secret key'}))

/* Static files path */
var indexHtmlPath = path.join(__dirname, '../../client/index.html');
var publicPath = path.join(__dirname, '../../../dist');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicPath));

app.get('/*', function (req, res) {
  res.sendFile(indexHtmlPath);
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;