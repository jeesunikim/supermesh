module.exports = function() {
	// TO-DO: get DB functioning
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/super-mesh');

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
	  // yay!
	  console.log("db connection made");
	});
};