'use strict';

var router = require('express').Router(),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	logger = require('morgan'),
	multipart = require('connect-multiparty');


	router.use(cookieParser());

    // Parse our POST and PUT bodies.
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(logger('dev'));

var multipartMiddleware = multipart();
router.use(multipartMiddleware);



module.exports = router;