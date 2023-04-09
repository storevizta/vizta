require('dotenv').config();

const router = require('express').Router();

const { verifyToken } = require('../middleware/auth.js');

const {
  singUp,
  singIn,
  singInGoogle,
} = require('../controller/authController.js');

router.post('/singup', singUp);

router.post('/singin', singIn);

router.get('/singingoogle', singInGoogle);

module.exports = router;
