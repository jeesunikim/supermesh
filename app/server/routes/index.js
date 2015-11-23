'use strict';
var path = require('path'),
	express = require('express'),
	app = express(),
	session = require('express-session');

require('./routes/configure')(app);
app.use('/api', require('./route.js'));
app.use(session({secret: 'session secret key'}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }
});

// Error catching endware.
app.use(function(err, req, res, next) {
    console.error(err, typeof next);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
