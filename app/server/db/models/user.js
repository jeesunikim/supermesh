'use strict';
var mongoose = require('mongoose'),
    shortid = require('shortid');

var db = require ('../../db');

var userSchema = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
  createdDate: {
    type: Date,
    default: new Date()
  },
  email: String,
  phone: String,
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  displayName: String,
  photo: String,
  security: Number
});

mongoose.model('User', userSchema);
