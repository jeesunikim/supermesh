'use strict';
var mongoose = require('mongoose'),
	shortid = require('shortid');

var messageSchema = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
	createdUser: {
		type: String,
		ref: 'User'
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