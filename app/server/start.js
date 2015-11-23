'use strict';

var chalk = require('chalk');
var startDb = require('./db');
var server = require('http').createServer();

var createApplication = function() {
    var app = require('./routes');
    server.on('request', app); // Attach the Express application.
    require('./io')(server); // Attach socket.io.
};

var startServer = function() {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    server.listen(PORT, function() {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });
};

startDb.then(createApplication).then(startServer).catch(function(err) {
    console.error('Initialization error:', chalk.red(err.message));
    console.error('Process terminating . . .');
    process.kill(1);
});

console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);