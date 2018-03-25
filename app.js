const express = require('express');


// Create app
const app = express();

// Express configuration server
require('./app/config/express-config')(app);

// Passport config
require('./app/passport/passport-config')(app);

// Config API REST
require('./app/config/api')(app);

// Export my instance app for used in other files
module.exports = app;

// Load routes
require('./app/routes');

// Config admin
require('./app/config/admin-config');

// Listen server
app.listen(app.get('settings').port, () => {
  console.log(`Listening port: ${app.get('settings').port}`);
});
