'use strict';
var mongoose = require('mongoose'),
		shortid = require('shortid');

var db = require ('./index');

var messageSchema = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
	name: String,
	category: String,
	message: String,
	upvote: {type: Number, default: 0}
});

messageSchema.methods.upvotes = function(cb) {
	this.upvote += 1;
	this.save(cb);
}

mongoose.model('Message', messageSchema);
