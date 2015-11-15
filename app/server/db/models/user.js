'use strict';
var mongoose = require('mongoose'),
    shortid = require('shortid');

var db = require ('../db');

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
  google_id: String,
  facebook_id: String,
  email: String,
  phone: String,
  firstName: String,
  lastName: String,
  photo: String,
  security: Number
});

mongoose.model('User', userSchema);
