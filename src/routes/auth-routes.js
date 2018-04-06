const router = require('express').Router();

//auth login
router.get('/login', (req, res) => {
  res.render('login'); //renders login page in views dir
});

//auth logout
router.get('/logout', (req, res) => {
  //handle with passport.js
  res.send('Logging out');
});

//auth with google
router.get('/google', (req, res) => {
  //handle with passport.js
  res.send('Logging in with Google');
});

module.exports = router;
