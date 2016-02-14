'use strict'

module.exports = {
  main: function(req, res) {
    try {
      return res.render('index');
    } catch (e) {
      return res.render("500");
    }
  },

  login: function(req, res){
    try {
      //Component contact-form
      let component = `
          System.config({
            paths: {
                'ng2-login-form/*': 'node_modules/ng2-login-form/*.js',
            },
            packages: {
              publics: {
                format: 'register',
                defaultExtension: 'js'
              }
            }
          });
          System.import('publics/boot')
            .then(null, console.error.bind(console));
      `;

      return res.render('login', {component: component});
    } catch (e) {
      return res.render("500");
    }
  },

  logout: function(req, res){
    try {
      req.logout();
    } catch (e) {
      return res.render("500");
    } finally {
      return res.redirect("/login");
    }
  }

}
