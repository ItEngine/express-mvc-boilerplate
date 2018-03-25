// All requires native nodejs
const path = require('path');
// For get sync folder files controllers
const glob = require('glob');
// My instance of app.js (this found because previosly export)
const app = require('../app');

// Get controllers
const controllers = {};
const files = glob.sync(path.join(process.cwd(), 'app', 'controllers', '**', '*.js'));

// Loop and load controllers
files.forEach((file) => {
  let temp = controllers;
  const parts = path.relative(path.join(process.cwd(), 'app', 'controllers'), file).slice(0, -3).split(path.sep);

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
require('./routes/index')(app, controllers);
