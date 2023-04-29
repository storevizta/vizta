require('dotenv').config();

const router = require('express').Router();

const {
  getSubscribeUserAds,
  createPreference,
  feedback,
} = require('../controller/mercadopagoController.js');

router.get('/subscribeads', getSubscribeUserAds);

router.post('/create_preference', createPreference);

router.get('/feedback', feedback);

module.exports = router;
