var express = require('express');
var router = express.Router();

router.get('/api/admin', function(req,res,next){
	res.send('response with a source');
});

module.exports = router;