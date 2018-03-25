const crypto = require('crypto');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.js');

/**
* @class: PassportConfig
* @description Config password for authenticate local
*/
class PassportConfig {
  constructor(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
      done(null, user); // req.user
    });

    passport.deserializeUser((user, done) => {
      done(null, user);
    });

    const userFields = {
      usernameField: 'username',
      passwordField: 'password',
    };

    passport.use(new LocalStrategy(userFields, (username, password, done) => {
      User.findOne({ username }).then((user) => {
        // Check if exist user
        if (!user) return done(null, false, { message: `The username ${username} not exists!` });

        // Hash password
        const hashedPassword = crypto.createHash('sha512').update(password).digest('hex');
        // Check password
        if (user.password === hashedPassword) {
          return done(null, user);
        }

        return done(null, false, { message: 'The password is incorrect' });
      });
    }));
  }
}

module.exports = app => new PassportConfig(app);
