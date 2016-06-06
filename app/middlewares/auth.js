'use strict'

module.exports = {

  //Check if is logged
  login_required: (req, res, next) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      res.send('Error de autorización');
    } else {
      next();
    }
  },

  //Check if is logging if is ok redirect to admin
  is_logging: (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
      res.redirect("/admin");
    } else {
      next();
    }
  },

  //Check if is logging if is ok redirect to admin penguin
  is_loggingPenguin: (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/login");
    }
  }

}
