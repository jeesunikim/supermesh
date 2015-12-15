var passport = require('passport'),
	_ = require('lodash'),
	LocalStrategy = require('passport-local').Strategy,
	mongoose = require('mongoose'),
	User = mongoose.model('User');

	passport.use(new LocalStrategy(
		function(username, password, done) {
			User.findOne({ username: username}, function(err, user){
				if(err){ return done(err); }
				if(!user){
					return done(null, false, {
						message: "Incorrect username"
					});
				}
				if(!user.verifyPassword(password)) {
					return done(null, false);
				}
				return done(null, user);
			});
		}

	));