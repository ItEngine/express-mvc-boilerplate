'use strict'

const express = require('express');
const restify = require('express-restify-mongoose');
const router = express.Router();
const User = require("../models/user.js");

module.exports = (app) => {
  /*
  @class ApiConfig
  @descrip: Init configuration API/REST with restify 
  */
  new class ApiConfig {
    
    constructor () {
      //Add all models, get starter with User
      restify.serve(router, User);
      app.use(router);
    }
    
  }
}

