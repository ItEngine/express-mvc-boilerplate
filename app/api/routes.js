'use strict'
const path = require('path');
//Model user
const User = require("../models/user.js");
//Middleware of authentication
const middlewareAuth = require("../middlewares/auth");

module.exports = function(app){

  //Route API

  //User Find All
  app.get('/api/v1/users/', middlewareAuth.login_required, function(req, res){
    User.find({}, function(err, data){
      return res.json(data);
    });
  });

}
