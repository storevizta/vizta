require('dotenv').config();

const router = require('express').Router();

const {
  createPreferenc,
  feedback,
} = require('../controller/mercadopagoController.js');

router.post('/create_preference', createPreferenc);

router.get('/feedback', feedback);

module.exports = router;
