'use strict'; 

var router = require('express').Router(),
	bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

module.exports = router;