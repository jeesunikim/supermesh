'use strict';
var path = require('path'),
	express = require('express'),
	app = express(),
	session = require('express-session');

require('./configure')(app);
app.use('/api', require('./route'));
app.use(session({secret: 'session secret key'}))

app.use(function(req, res, next) {
    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }
});


app.get('/', function (req, res) {
	var index = path.join(__dirname, '..', '..', 'client', 'index.html');
	res.sendFile(index);
});

app.use(function(err, req, res, next) {
    console.error(err, typeof next);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;