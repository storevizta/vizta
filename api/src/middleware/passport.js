const passport = require('passport');

const { User } = require('../database');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID =
  '577878164983-vp083c5gohmadll8e6gdk9v77m4ocesb.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, cb) => {
      const googleUser = await User.findOne({
        where: { name: profile.displayName },
      });
      try {
        if (!googleUser) {
          const newUser = await User.create({
            name: profile.displayName,
            username: profile.displayName,
            email: profile.emails[0].value,
          });
          console.log('User created');
          return cb(null, newUser);
        } else {
          return cb(null, googleUser);
        }
      } catch (error) {
        return cb(error);
      }
    }
  )
);
