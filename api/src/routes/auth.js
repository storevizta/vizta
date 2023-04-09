require('dotenv').config();

const router = require('express').Router();

const passport = require('passport');

require('../middleware/passport');

const { verifyToken } = require('../middleware/auth.js');

const { singUp, singIn } = require('../controller/authController.js');

router.post('/singup', singUp);

router.post('/singin', singIn);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Aquí puedes manejar la respuesta exitosa de autenticación y mostrarla en el console log o en la ruta que desees
    res.redirect('/'); // Redireccionar a una página de inicio de sesión exitosa, por ejemplo
  }
);

module.exports = router;
