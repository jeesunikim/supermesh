'use strict';
var mongoose = require('mongoose'),
	shortid = require('shortid');
	// location
	// messages
	// participants
	// speakers

var db = require ('../')

var Session = new mongoose.Schema({
	_id: {
		type: String,
		default: shortid.generate
	},
	name: String,
	speaker: {
		type: String,
		ref: 'Speaker'
	},
	starttime: Number,
	endtime: Number,
	duration: Number,
	location: {
		type: String,
		ref: 'Location'
	},
	messages: {
		type: String,
		ref: 'Messages'
	},
	participants: {
		type: String,
		ref: 'Participants'
	}
});