'use strict';

const passport = require('passport');
const middlewareAuth = require("../middlewares/auth");

module.exports = (app, controllers) => {
  /*
  @class RoutesConfig
  @descrip: Set routes app
  */
  new class RoutesConfig {
    
    constructor () {
      //Routes authentication
      this.authentication();
    }
    
    /*
    @method: authentication
    @descrip: Routes/authentication
    */
    authentication () {
      let index = controllers.index;
      //Index
      app.get("/", index.main.bind(index));

      //login
      app.get("/login", middlewareAuth.is_logging, index.login.bind(index));
      app.post("/login", passport.authenticate('local', {successRedirect: '/admin/'}));

      //Logout admin
      app.route('/admin/logout').get(
        middlewareAuth.login_required, 
        index.logout.bind(index)
      );
    }
    
  }
}