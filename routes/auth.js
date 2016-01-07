var express = require('express');
var router = express.Router();
var passport = require('../modules/passport_config');

// auth routes

// google
router.get('/google',
  passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/users');
  });


// app logout
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



module.exports = router;
