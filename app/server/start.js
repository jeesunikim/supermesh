process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var chalk = require('chalk'),
    config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    app = require('./routes/configure/'),
    db = mongoose(),
    app = express();


app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);

// var server = require('http').createServer();

// var createApplication = function() {
//     server.on('request', app); // Attach the Express Application
//     // require('./io')(server); //Attach socket.io
// };

// var startServer = function () {
//         var port = 7777;
//         server.listen(port, function() {
//             console.log(chalk.blue('Server started on port', chalk.magenta(port)));
//         });
// };

// db.then(createApplication).then(startServer).catch(function(err) {
//     console.error('Initialization error:', chalk.red(err.message));
//     console.error('Process terminating . . .');
//     process.kill(1);
// });
