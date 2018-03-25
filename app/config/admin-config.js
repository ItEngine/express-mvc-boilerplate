const mongooseadmin = require('mongooseadmin');
const app = require('../../app');

app.use((req, res, next) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.redirect('/');
  } else {
    const options = {
      title: 'Express-mvc-boilerplate Admin',
      login: '/',
    };

    app.use('/admin', mongooseadmin(options));

    next();
  }
});

