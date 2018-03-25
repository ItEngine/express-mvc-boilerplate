const express = require('express');
const restify = require('express-restify-mongoose');
const User = require('../models/user.js');

const router = express.Router();

/**
* @class ApiConfig
* @description Init configuration API/REST with restify
*/
class ApiConfig {
  constructor(app) {
    // Add all models, get starter with User
    restify.serve(router, User);
    app.use(router);
  }
}

module.exports = app => new ApiConfig(app);
