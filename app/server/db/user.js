'use strict';
var mongoose = require('mongoose'),
	crypto = require('crypto'),
	shortid = require('shortid');

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

var generateSalt = function () {
	return crypto.randomBytes(16).toString('base64');
};

var encryptPWD = function(plainText, salt) { 
	var hash = crypto.createHash('sha1');
	hash.update(plainText);
	hash.update(salt);
	return hash.digest('hex');
};

userSchema.pre('save', function (next) {
	if(this.isModified('password')) {
		this.salt = this.constructor.generateSalt();
		this.password = this.constructor.encryptPWD(this.password, this.salt);
	}
	next();
});

userSchema.statics.generateSalt = generateSalt;
userSchema.statics.encryptPWD = encryptPWD;
userSchema.method('correctPassword', function (candidatePassword) {
	return encryptPWD(candidatePassword, this.salt) === this.password;
});

mongoose.model('User', userSchema);