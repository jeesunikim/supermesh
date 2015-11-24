var router = require('express').Router();
var	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	passport = require('passport'),
	_ = require('lodash');
var LocalStrategy = require('passport-local').Strategy;

app.get('/api/signup', function (req, res){
	User.find(function (err, users){
		if(err) {
			res.send(err);
		}
		res.json(users);
	})
});