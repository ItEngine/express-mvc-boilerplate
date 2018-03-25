module.exports = {

  // Check if is logged
  loginRequired: (req, res, next) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      res.send('Error de autorización');
    } else {
      next();
    }
  },

  // Check if is logging if is ok redirect to admin
  isLogging: (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
      res.redirect('/admin');
    } else {
      next();
    }
  },
};
