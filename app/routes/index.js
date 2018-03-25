const passport = require('passport');
const middlewareAuth = require('../middlewares/auth');

/**
* @class RoutesConfig
* @description Set routes app
*/
class RoutesConfig {
  constructor(app, controllers) {
    const { index } = controllers;
    // Index
    app.get('/', index.main.bind(index));

    // login
    app.get('/login', middlewareAuth.isLogging, index.login.bind(index));
    app.post('/login', passport.authenticate('local', { successRedirect: '/admin/' }));

    // Logout for admin
    app.route('/admin/logout').get(
      middlewareAuth.loginRequired,
      index.logout.bind(index),
    );

    // Logout
    app.route('/admin/logout').post(
      middlewareAuth.loginRequired,
      index.logout.bind(index),
    );
  }
}

module.exports = (app, controllers) => new RoutesConfig(app, controllers);
