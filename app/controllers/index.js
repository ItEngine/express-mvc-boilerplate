/**
* @class: IndexController
* @description Main controller for index app
*/
class IndexController {
  /**
  * @method Main
  * @description Index view
  */
  main(req, res) {
    try {
      res.locals.login = req.isAuthenticated();
      return res.render('index');
    } catch (e) {
      return res.render('500');
    }
  }

  /**
  * @method login
  * @description Login user
  */
  login(req, res) {
    try {
      return res.render('login');
    } catch (e) {
      return res.render('500');
    }
  }

  /**
  * @method logout
  * @description Logout session
  */
  logout(req, res) {
    try {
      req.logout();
    } catch (e) {
      return res.render('500');
    } finally {
      return res.redirect('/login');
    }
  }
}

module.exports = new IndexController();
