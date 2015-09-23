'use strict';

var router = require('express').Router();

router.use(function (err, req, res, next) {
	err.status = err.status || 500;
	if (process.env.NODE_ENV == 'development') {
		console.error(err.stack);
	}
	res.status(err.status).send(err);
});

module.exports = router;