var router = require('express').Router();
var	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	passport = require('passport'),
	_ = require('lodash'),
	LocalStrategy = require('passport-local').Strategy,;
