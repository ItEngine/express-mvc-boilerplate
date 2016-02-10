(function(){
  angular.module('ArvemApp', ['ng-admin'])
    // declare a function to run when the module bootstraps (during the 'config' phase)
    .config(['NgAdminConfigurationProvider', function (nga) {
        // create an admin application
        var admin = nga.application('Arvem Admin')
          .baseApiUrl('http://localhost:3000/api/v1/'); // main API endpoint
        var user = nga.entity('users');
        // set the fields of the user entity list view
        user.listView().fields([
            nga.field('name'),
            nga.field('surname'),
            nga.field('username'),
            nga.field('email'),
            nga.field('password'),
            nga.field('company'),
            nga.field('is_admin'),
            nga.field('payment'),
            nga.field('expires'),
        ]);
        // add the user entity to the admin application
        admin.addEntity(user);
        // attach the admin application to the DOM and execute it
        nga.configure(admin);
    }]);
})();
