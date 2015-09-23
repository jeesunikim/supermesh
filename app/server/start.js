'use strict';

var chalk = require('chalk'),
    app = require('./routes/configure/'),
    db = require('./db/db');

var server = require('http').createServer();

var createApplication = function() {
    server.on('request', app); // Attach the Express Application
    // require('./io')(server); //Attach socket.io
};

var startServer = function () {
        var port = 7777;
        server.listen(port, function() {
            console.log(chalk.blue('Server started on port', chalk.magenta(port)));
        });
};

db.then(createApplication).then(startServer).catch(function(err) {
    console.error('Initialization error:', chalk.red(err.message));
    console.error('Process terminating . . .');
    process.kill(1);
});