Express-MVC-Boilerplate
=======================

Boilerplate for Express.Js with MVC pattern.

Getting started
---------------

1. Clone this repo.
2. Execute **npm install**.
3. Rename file config.js.name to config.js and modify content file.
4. Execute **bower install**.
5. Execute **node app.js** and go to browser **localhost:3000**.

Content
-------

1. Basic MVC structure to begin. Using MondoDB.
2. Model **USER** integrate.
3. Passport local-login. Using field 'email' of the model user.
4. Middlewares for authentication.
5. API REST with **express-restify-mongoose**.
6. Bootstrap, Angular2 and polyfill api fetch pre-installed.

If you do not want to use the login
-----------------------------------

1. Remove folder 'app/passport'.
2. In 'app/routes/index.js' remove routes login and logout.
3. Remove folder or file 'app/middlewares/auth.js'.
4. In controller 'app/controllers/index.js' remove function login and logout.
5. Finally modify the view 'app/views/index.hbs' and remove 'app/views/login.hbs'.

For add new models to api
-------------------------

Add models in file 'app/config.api.js'.
