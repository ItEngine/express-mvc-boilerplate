'use strict'

//All requires native nodejs
const fs = require('fs');
const path = require('path');

//For get sync folder files controllers
const glob = require('glob');
//For authentication
const passport = require('passport');

//Middleware of authentication
const middlewareAuth = require("./middlewares/auth");

//My instance of app.js (this found because previosly export)
const app = require(path.join(process.cwd(), 'app'));

//Load arrays with require controllers
let controllers = {};
let files = glob.sync(path.join(process.cwd(), 'app', 'controllers', '**', '*.js'));
files.forEach(function(file) {
  let temp = controllers;
  let parts = path.relative(path.join(process.cwd(), 'app', 'controllers'), file).slice(0, -3).split(path.sep);

  while (parts.length) {
    if (parts.length === 1) {
      temp[parts[0]] = require(file);
    } else {
      temp[parts[0]] = temp[parts[0]] || {};
    }
    temp = temp[parts.shift()];
  }
});

// Routes of application
module.exports = function(){
  //Index login
  app.get("/", middlewareAuth.is_logging, controllers.index.main);
  app.post('/login', passport.authenticate('local', {successRedirect: '/admin/'}));

  //Logout admin
  app.route('/admin/logout').get(middlewareAuth.login_required, controllers.admin.index.logout);

  /* Routes admin */

  //Home
  app.route('/admin').get(middlewareAuth.login_required, controllers.admin.index.main);
  //Logout admin
  app.route('/admin/logout').get(middlewareAuth.login_required, controllers.admin.index.logout);

  /*Api routes*/
  require("./api/routes")(app);
}
