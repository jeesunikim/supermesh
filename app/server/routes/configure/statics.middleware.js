"use strict";
var path = require('path'),
	express = require('express'),
	router = express.Router(),
	favicon = require('serve-favicon'),
	rootPath = path.join(__dirname, '..', '..', '..', '..'),
	publicPath = path.join(rootPath, './dist'),
	clientPath = path.join(rootPath, './app/client');
	
router.use(express.static(publicPath));

router.use('/client', express.static(clientPath));

module.exports = router;