'use strict';
const crypto = require('crypto');

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require("../models/user.js");

module.exports = (app) => {
	/*
	@class: PassportConfig
	@descrip: Config password for authenticate local
	*/
	new class PassportConfig {
		
		constructor () {
			app.use(passport.initialize());
			app.use(passport.session());

			passport.serializeUser((user, done) => {
				done(null, user); // req.user
			});
			passport.deserializeUser((user, done) => {
				done(null, user);
			});

			passport.use(new localStrategy({
					usernameField: 'email',
					passwordField: 'password'
				},
				(email, password, done) => {
					User.findOne({email: email}).then((user) => {
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
		}
		
	}
};

