Express-MVC-Boilerplate
=======================

Boilerplate for Express.Js with MVC pattern.

Getting started
---------------

1. Clone this repo.
2. Execute **yarn install**.
3. Rename file config.js.name to config.js and modify content file.
4. Execute **bower install**.
5. Execute **yar start-dev** or **yarn start** and go to browser **localhost:3000**.
6. Create user **admin** in collection **users** in MongoDB. For example for create el user **admin** with password **admin** we need encrypted with **crypto**.
  Like this: c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec
  This last value is the password encrypted **admin**.
7. For access to the api, go to: http://localhost:3000/api/v1/user

Content
-------

1. Basic MVC structure to begin using MondoDB.
2. Model **USER** integrate.
3. Passport local-login. Using field 'username' of the model user.
4. Middlewares for authentication.
5. Admin generator using **mongooseadmin** (This generate cruds automatic in base to folder models).
6. API REST with **express-restify-mongoose**.
7. Bootstrap and polyfill api fetch pre-installed.
8. Use pug.

For add new enpoints to api
---------------------------

Add models in file 'app/config/api.js'.
