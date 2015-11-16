'use strict';
var path = require('path');
var express = require('express');
var app = express();
var session = require('express-session');

require('./routes/configure')(app);

// app.use('/', function(req, res){
//   res.sendFile(app.get('indexHTMLPath'));
// });

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
