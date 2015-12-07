var bodyParser = require('body-parser'),
	express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	MessageModel = mongoose.model('Message'),
	logger = require('morgan'),
	shortId = require('shortid'),
	path = require('path'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	_ = require('lodash');

router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/message', function(req, res, next){
	MessageModel.find({}, function(err, msgs){
		if (err) {
			return handleError(err);
		}else{
			res.json(msgs);
		}
	})
	// res.send(msgs);
});

module.exports = router;