'use strict';
var crypto = require('crypto'),
	mongoose = require('mongoose'),
	shortid = require('shortid'),
	db = require ('./index'),
	Message = mongoose.model('Message');
	require('./message');

var userSchema = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
	userName: {
		type: String,
		required: true
	},
	password: String,
	salt: String,
	Department: String,
	suggestedIdea: {
		type: String,
		ref: 'Message'
	}
});

mongoose.model('User', userSchema);
