require('dotenv').config();

const router = require('express').Router();

const {
  getAds,
  getAdById,
  getSubscribeUserAds,
  createAd,
  setStatusAd,
  updateAd,
  deleteAd,
} = require('../controller/adsController.js');

router.get('/', getAds);

router.get('/:id', getAdById);

router.get('/subscribeads', getSubscribeUserAds);

router.post('/', createAd);

router.put('/updateAd', updateAd);

router.delete('/:id', deleteAd);

router.put('/setstatus', setStatusAd);

module.exports = router;
