'use strict';
var router = require('express').Router();

/* All the pages' routers */
router.use('/', require('./signin'));
router.use('/signup', require('./signup'));
router.use('/admin', require('./admin'));
router.use('/session', require('./session'));
router.use('/sessions', require('./sessions'));

router.use(function (req, res) {
	res.status(404).end();
});

module.exports = router;