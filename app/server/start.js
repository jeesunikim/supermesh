'use strict';

var chalk = require('chalk');
var startDb = require('./db');
var server = require('http').createServer();

var createApplication = new Promise(function(resolve, reject) {
    var app = require('./routes');
    server.on('request', function() {
        resolve(app);
    });
    require('./io')(server); 
});

var startServer = function() {
    var PORT = process.env.PORT || 7777;
    server.listen(PORT, function() {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });
};

startDb.then(createApplication).then(startServer).catch(function(err) {
    console.error('Initialization error:', chalk.red(err.message));
    console.error('Process terminating . . .');
    process.kill(1);
});