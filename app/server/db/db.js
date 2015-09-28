'use strict';
var chalk = require('chalk'),
	mongoose = require('mongoose'),
	Promise = require('bluebird'); 

require('./models');

var databaseURI = 'mongodb://localhost:27017/supermesh';

var db = mongoose.connect(databaseURI).connection;

var startDbPromise = new Promise(function (resolve, reject) {
	db.on('open', resolve);
	db.on('error', reject);
});

console.log(chalk.yellow('Opening connection to MongoDB . . .'));
startDbPromise.then(function () {
    console.log(chalk.green('MongoDB connection opened!'));
});

module.exports = startDbPromise;