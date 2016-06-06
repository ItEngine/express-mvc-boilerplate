'use strict';
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

module.exports = (app) => {
  /*
  @class ExpressConfig
  @descrip: Express configuration boilerplate
  */
  new class ExpressConfig {
    
    constructor () {
      //Set setting file config.js
      app.set('settings', require('./config'));
      //Export data config for used in tempate
      app.locals.settings = app.get('settings');

      // Configure express to use jade templates
      app.set('views', path.join(process.cwd(), 'app', 'views'));
      app.set('view engine', 'jade');

      //Override with the X-HTTP-Method-Override header in the request
      app.use(methodOverride('X-HTTP-Method-Override'));

      //Cookies
      app.use(cookieParser());

      //For manage sessions
      app.use(session({
          secret: 'supernova',
          store: new MongoStore({ url: 'mongodb://' + app.get('settings').database.domain + '/sessions', autoRemove: 'disabled'}),
          resave: false,
          saveUninitialized: false,
          cookie: { maxAge: (24*3600*1000*30), expires: false}, // 30 Days in ms
      }));

      //Favicon
      app.use(favicon(path.join(process.cwd() + '/public/favicon.ico')));

      //Set folder static files
      app.use('/publics', express.static(process.cwd() + '/public'));
      //Servind modules node_modules in the url scripts
      app.use('/node_modules', express.static(path.join(process.cwd() + '/node_modules')));
      //Setvind module bower_components in the url scripts
      app.use('/bower_components', express.static(path.join(process.cwd(), '/bower_components')));

      //For the verbs HTTP get params
      app.use(bodyParser.json());       // to support JSON-encoded bodies
      app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
      }));

      //Connect to database
      mongoose.connect('mongodb://' + app.get('settings').database.domain + '/' + app.get('settings').database.name);
    }  
    
  }
}


