'use strict'

module.exports = {

  //Show admin
  main: function(req, res) {
    return res.render("admin/home", {user: req.user, layout: 'admin'});
  },

  //Logout admin
  logout: function(req, res){
    try {
      req.logout();
      delete req.session.user;
    } catch (e) {
      return res.render("500");
    } finally {
      return res.redirect("/");
    }
  }
}
