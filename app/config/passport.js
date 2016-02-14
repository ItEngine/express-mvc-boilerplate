'use strict';
const crypto = require('crypto');

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require("../models/user.js");

//Config password for authenticate local
const passportConfig = function (server) {

	server.use(passport.initialize());
	server.use(passport.session());

	passport.serializeUser(function (user, done) {
		done(null, user); // req.user
	});
	passport.deserializeUser(function (user, done) {
		done(null, user);
	});

  passport.use(new localStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function (email, password, done) {
			User.findOne({email: email}).then(function (user) {
        //Check if exist user
				if (!user) return done(null, false, {message: `El email ${email} no existe!`});

        //Hash password
        let hashedPassword = crypto.createHash('sha512').update(password).digest('hex');

        //Check password
				if (user.password === hashedPassword) {
					return done(null, user);
				} else {
					return done(null, false, {message: 'El password es incorrecto'});
				}
			});
		}
	));

};

module.exports = passportConfig;
