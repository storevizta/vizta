require('dotenv').config();

const router = require('express').Router();

const {
  getAds,
  getAdById,
  createAd,
  setStatusAd,
} = require('../controller/adsController.js');

router.get('/', getAds);

router.get('/:id', getAdById);

router.post('/', createAd);

router.put('/setstatus', setStatusAd);

module.exports = router;
