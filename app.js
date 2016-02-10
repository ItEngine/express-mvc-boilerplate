'use strict';

//All requires native nodejs
const path = require('path');

//All requires packages nodejs
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

//Config site
const config = require('./config');

//Init server express
const app = express();

//Set setting file config.js
app.set('settings', config);
//Export data config for used in tempate
app.locals.settings = app.get('settings');

// Configure express to use handlebars templates
app.engine('.hbs', exphbs({ layoutsDir: "app/views/layouts", defaultLayout: 'main', extname: '.hbs' }));
app.set('views', path.join(process.cwd(), 'app', 'views'));
app.set('view engine', '.hbs');

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

//Export my instance app for used in other files
module.exports = app;

//Passport config
require('./app/config/passport')(app);

//Load routes
require(path.join(process.cwd(), 'app', 'routes'))();

//Listen server
app.listen(app.get('settings').port, function() {
  console.log('Listening port: ' + app.get('settings').port)
});
