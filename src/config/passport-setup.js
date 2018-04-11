'use strict';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  //this is mongodb id - eventhough it is represented as _id on mongodb, use it as id here.
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

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
        done(null, currentUser);
      } else {
        new User({
          userName: profile.displayName,
          googleId: profile.id,
          thumbnail: profile._json.image.url
        }).save().then((newUser) => {
          console.log('User created: ' + newUser);
          done(null, currentUser);
        });
      }
    });
  })
);