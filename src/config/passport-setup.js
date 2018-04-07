const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
  new GoogleStrategy({
    //options for startegy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'

  }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    console.log('Reached callback');
    console.log(profile);
  })
);
