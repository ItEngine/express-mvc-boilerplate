System.register(['angular2/platform/browser', 'ng2-login-form/src/login'], function(exports_1) {
    "use strict";
    var browser_1, login_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(login_1.LoginForm);
        }
    }
});
//# sourceMappingURL=boot.js.map