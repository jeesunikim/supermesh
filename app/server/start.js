'use strict';

var chalk = require('chalk');
var startDb = require('./db');
var app = require('./routes');
var server = require('http').createServer(app);

var createApplication = new Promise(function(resolve, reject) {
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


// var port = process.env.port || 7777;
// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);

// function normalizePort(val) {
//   var port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// }


// function onError(error) {
//   if (error.syscall !== 'listen') {
//     throw error;
//   }

//   var bind = typeof port === 'string'
//     ? 'Pipe ' + port
//     : 'Port ' + port;

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }

// function onListening() {
//   var addr = server.address();
//   var bind = typeof addr === 'string'
//     ? 'pipe ' + addr
//     : 'port ' + addr.port;
// }