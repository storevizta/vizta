require('dotenv').config();

const router = require('express').Router();

var jwt = require('jsonwebtoken');

const { verifyToken } = require('../middleware/auth.js');

var session = require('express-session');

const { singUp, singIn } = require('../controller/authController.js');

require('../middleware/passport.js');

const passport = require('passport');

router.use(session({ secret: 'cats' }));
router.use(passport.initialize());
router.use(passport.session());

router.post('/singup', singUp);

router.post('/singin', singIn);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

module.exports = router;
