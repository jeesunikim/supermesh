'use strict';

module.exports = function(app){
	app.setValue = app.set.bind(app);
	app.getValue = function(path) {
		return app.get(path);
	};

	require('./authentication')(app);
}