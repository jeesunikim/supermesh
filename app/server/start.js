'use strict';

var chalk = require('chalk'),
    app = require('./routes/configure/');

var server = require('http').createServer();

server.on('request', app); // Attach the Express Application

var port = 80;
server.listen(port, function() {
    console.log(chalk.blue('Server started on port', chalk.magenta(port)));
});
