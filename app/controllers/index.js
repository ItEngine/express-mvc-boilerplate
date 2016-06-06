'use strict'

/*
@class: IndexController
@descrip: Main controller for index app
*/
class IndexController {
   
   /*
   @name: Main
   @descrip: Index view
   */
   main (req, res) {
      try {
        return res.render('index');
      } catch (e) {
        return res.render("500");
      }
   }
   
   /*
   @name: login
   @descrip: Login user
   */
   login (req, res) {
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
   }
   
   /*
   @name: logout
   @descrip: Logout session
   */
   logout (req, res) {
      try {
        req.logout();
      } catch (e) {
        return res.render("500");
      } finally {
        return res.redirect("/login");
      }
   }
  
}

module.exports = new IndexController;