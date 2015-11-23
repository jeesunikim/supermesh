'use strict';
var socketio = require('socket.io');
var io = null;

module.exports = function (server) {

    if (io) return io;

    io = socketio(server);

    io.on('connection', function () {
        console.log('Now have access to socket, wowzers!');  //why isn't this logging...?
    });
    
    return io;

};
