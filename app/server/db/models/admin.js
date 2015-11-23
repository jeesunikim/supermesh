'use strict';

var mongoose = require('mongoose'),
    shortid = require('shortid'),
    Facility = require('./facility.js');

var db = require('../../db');

var Admin = new mongoose.Schema({
    _id: {
        type: String,
        ref: 'User'
    },
    privilegesFrom: {
        type: String,
        ref: 'User'
    }
});

mongoose.adminEmails = [
    'rwcbeaman@gmail.com',
    'galenweber@gmail.com',
    'jeesunikim@gmail.com',
    'davidtebbi@gmail.com'
];

Admin.static('isAdmin', function(user) {
    return this.findById(user._id)
    .then(function(result) {
        return mongoose.adminEmails.indexOf(user.email) !== -1 || !!result;
    }).then(function(isItGood){
        return isItGood;
    });
});

mongoose.model('Admin', Admin);