var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('users', { title: "You're logged in boy!", user: req.user });
});

module.exports = router;
