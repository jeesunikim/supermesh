'use strict';
var router = require('express').Router();

/* All the pages' routers */
router.use('/', require('./message'));
router.use('/ideas', require('./ideas'));

router.use(function (req, res) {
	res.status(404).end();
});

module.exports = router;