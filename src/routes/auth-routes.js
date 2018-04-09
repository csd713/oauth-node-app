const router = require('express').Router();
const passport = require('passport');

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
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

//callback route for google redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
})

module.exports = router;