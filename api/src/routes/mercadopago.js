require('dotenv').config();

const router = require('express').Router();

const {
  createPreference,
  feedback,
} = require('../controller/mercadopagoController.js');

router.post('/create_preference', createPreference);

router.get('/feedback', feedback);

module.exports = router;
