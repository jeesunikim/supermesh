var bodyParser = require('body-parser'),
express = require('express'),
path = require('path'),
router = express.Router(),
logger = require('morgan'),
mongoose = require('mongoose'),
MessageModel = mongoose.model('Message'),
shortId = require('shortid');

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
});

router.put('/message/:id/upvote', function(req, res, next) {
	MessageModel.findById(req.params.id, function(err, msg) {
		if (err) {
			return handleError(err);
		} else {
			msg.upvotes(function(err, msg){
				if (err) {
					return handleError(err);
				} else {
					console.log(msg, "msg");
					res.json(msg);
				}
			});
		}
	});
});

router.get('/message/:id', function(req, res, next){
	MessageModel.findById(req.params.id, function(err, eachMsg) {
		if (err) {
			return handleError(err);
		}else{
			res.json(eachMsg);
		}
	})
});

router.post('/message', function(req, res, next){
	MessageModel.create(req.body, function (err, newMessage){
		if(err) {
			next(err);
		}else{
			res.json(newMessage);
		}
	});
});

module.exports = router;