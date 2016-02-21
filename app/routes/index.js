'use strict';

//For authentication
const passport = require('passport');

//Middleware of authentication
const middlewareAuth = require("../middlewares/auth");

const routesIndex = function(app, controllers){

  //Index
  app.get("/", controllers.index.main);

  //login
  app.get("/login", middlewareAuth.is_logging, controllers.index.login);
  app.post("/login", passport.authenticate('local', {successRedirect: '/admin/'}));

  //Logout admin
  app.route('/logout').get(middlewareAuth.login_required, controllers.index.logout);

}

module.exports = routesIndex;
