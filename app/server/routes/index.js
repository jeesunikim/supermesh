var router = require('express').Router();

/* All the pages' routers */
// router.use('/', require('./'));
// router.use('/session', require('./sessions'));
// router.use('/', require('./'));
 router.use('/upload', require('./sessions'));

router.use(function (req, res) {
	res.status(404).end();
});

module.exports = router;
