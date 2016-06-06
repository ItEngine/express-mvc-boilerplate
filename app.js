'use strict';

const path = require('path');
const express = require('express');
const app = express();

require('./app/config/set-config-express')(app);

//Passport config
require('./app/passport/passport-config')(app);

//Export my instance app for used in other files
module.exports = app;

//Load routes
require(path.join(process.cwd(), 'app', 'routes'))();

//Config API REST
require('./app/config/api')(app);

//Config admin penguin
require('./app/config/config-penguin')(app);

//Listen server
app.listen(app.get('settings').port, () => {
  console.log('Listening port: ' + app.get('settings').port)
});
