'use strict';

const path = require('path');
const middlewareAuth = require("../middlewares/auth");
require('coffee-script/register');
const penguin = require('penguin');

module.exports = (app) => {
  /*
  @class: ConfigPenguin
  @descrip: Configuration penguin admin 
  */
  new class ConfigPenguin {
    
    constructor() {
      //Penguin app
      let admin = new penguin.Admin({
        indexTitle: app.locals.settings.name + " Admin",
        menuExtraHTML: `
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="/admin/logout">Log Out</a>
            </li>
          </ul>`,
        modelsPath: path.join(process.cwd(), 'app', 'models'),
        menu: [
          [ 'Express-Mvc-Boilerplate Admin', '/admin' ],
          [ 'Cruds', [
              [ 'Users', '/admin/users' ]
            ]
          ]
        ],
        preMiddleware: (req, res, next) => {
          //Cheq if is logging
          middlewareAuth.is_loggingPenguin(req, res, next);
        }
      });
      admin.setupApp(app);
    } 
    
  }  
}