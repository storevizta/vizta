require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const {
  signUp,
  signIn,
  signInGoogle,
  googleRegister,
} = require('../controller/authController.js');

router.post('/signup', signUp);

router.post('/signin', signIn);

router.get('/signingoogle', signInGoogle);

router.get('/signingoogle/register', googleRegister);

module.exports = router;
