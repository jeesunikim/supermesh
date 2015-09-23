'use strict';

var router = require('express').Router(),
	logger = require('morgan');

router.use(logger('dev'));

module.exports = router;