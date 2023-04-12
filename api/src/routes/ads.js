require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const {
  getAds,
  getAdById,
  createAd,
  updateAd,
  deleteAd,
} = require('../controller/adsController.js');

router.get('/', getAds);

router.get('/:id', getAdById);

router.post('/', createAd);

router.put('/:id', updateAd);

router.delete('/:id', deleteAd);

module.exports = router;
