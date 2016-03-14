'use strict';

const path = require('path');

const middlewareAuth = require("../middlewares/auth");

require('coffee-script/register');
const penguin = require('penguin');

const configPenguin = function(app){
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
    preMiddleware: function(req, res, next){
      //Cheq if is logging
      middlewareAuth.is_loggingPenguin(req, res, next);
    }
  });
  admin.setupApp(app);
}

module.exports = configPenguin;
