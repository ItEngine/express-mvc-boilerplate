'use strict'

module.exports = {
  main: function(req, res) {
    try {
      return res.render('index');
    } catch (e) {
      return res.render("500");
    }
  }
}
