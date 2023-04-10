require('dotenv').config();

const router = require('express').Router();

<<<<<<< HEAD
const passport = require('passport');

require('../middleware/passport');

const { verifyToken } = require('../middleware/auth.js');
=======
const { verifyToken, authorize } = require('../middleware/auth.js');
>>>>>>> e6a78176e9186bbc8b57a0e1e63328c9b4071f92

const {
  singUp,
  singIn,
  singInGoogle,
} = require('../controller/authController.js');

router.post('/singup', singUp);

router.post('/singin', singIn);

<<<<<<< HEAD
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
=======
router.get('/singingoogle', singInGoogle);
>>>>>>> e6a78176e9186bbc8b57a0e1e63328c9b4071f92

module.exports = router;
