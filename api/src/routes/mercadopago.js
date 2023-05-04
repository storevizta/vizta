require('dotenv').config();

const router = require('express').Router();

const {
  getSubscribeUserAds,
  createPreference,
  feedback,
  subscribeUser,
} = require('../controller/mercadopagoController.js');

router.get('/subscribeproducts', getSubscribeUserAds);

router.post('/create_preference', createPreference);

router.post('/subscribeuser', subscribeUser);

router.get('/feedback', feedback);

module.exports = router;
