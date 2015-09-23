'use strict';

var router = require('express').Router(),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	logger = require('morgan');

	router.use(cookieParser());

    // Parse our POST and PUT bodies.
    router.use(bodyParser({limit: '50mb'}));
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(logger('dev'));

module.exports = router;