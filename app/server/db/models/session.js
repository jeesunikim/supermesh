'use strict';
var mongoose = require('mongoose'),
	shortid = require('shortid');
	// location
	// messages
	// participants
	// speakers

var db = require ('../db');

var Session = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
	name: String,
	speaker: String,
	starttime: Number,
	endtime: Number,
	location: String,
	messages: {
		type: String,
		ref: 'Messages'
	}
});

mongoose.model('Session', Session);