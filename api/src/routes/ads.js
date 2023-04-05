require('dotenv').config();

const router = require('express').Router();

const {
  getAds,
  getAdsById,
  getAdsByCategory,
  postAds,
  putAds,
  deleteAds,
} = require('../controller/adsController.js');

router.get('/', getAds);

router.get('/:id', getAdsById);

router.get('/:category', getAdsByCategory);

router.post('/', postAds);

router.put('/', putAds);

router.delete('/', deleteAds);

module.exports = router;
