'use strict'

const express = require('express');
const restify = require('express-restify-mongoose');
const router = express.Router();

const User = require("../models/user.js");

//Config Api REST
const apiConfig = function (server) {
  //Add all models
  restify.serve(router, User);
  server.use(router);
}

module.exports = apiConfig;
