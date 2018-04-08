const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
  new GoogleStrategy({
    //options for startegy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'

  }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    //check if user exists
    User.findOne({
      googleId: profile.id
    }).then((currentUser) => {
      if (currentUser) {
        console.log('User exists: ' + currentUser);
      } else {
        new User({
          userName: profile.displayName,
          googleId: profile.id
        }).save().then((newUser) => {
          console.log('User created: ' + newUser);
        });
      }
    });
  })
);