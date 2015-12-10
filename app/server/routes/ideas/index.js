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

module.exports = router;