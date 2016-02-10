'use strict'

module.exports = {
  main: function(req, res) {
    try {
      //Component contact-login
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
      return res.render('index', {component: component});
    } catch (e) {
      return res.render("500");
    }
  }
}
