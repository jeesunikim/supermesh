'use strict';
var mongoose = require('mongoose'),
		shortid = require('shortid');

var db = require ('../db');

var sessionSchema = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
	name: String,
	speaker: String,
	location: String,
	message: String,
	user: [{
		type: String,
		ref: 'User'
	}]
});

mongoose.model('Session', sessionSchema);
