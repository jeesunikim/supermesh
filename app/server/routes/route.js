'use strict';
var router = require('express').Router();

/* All the pages' routers */
router.use('/ideas', require('./ideas'));
router.use('/idea', require('./idea'));
// router.use('/', require('./login'));

router.use(function (req, res) {
	res.status(404).end();
});

module.exports = router;