'use strict';

var app = require('express')();
var path = require('path');

app.use(require('./parsing.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./error.middleware'));

app.use(require('./statics.middleware'));

module.exports = app;