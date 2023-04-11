require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const {
  getAds,
  getAdById,
  getCategory,
  getAdsByCategory,
  createAd,
  addRating,
  reportAd,
  updateAd,
  deleteAd,
} = require('../controller/adsController.js');

router.get('/', getAds);

router.get('/:id', getAdById);

router.get('/category', getCategory);

router.get('/category/:name', getAdsByCategory);

router.post('/', createAd);

router.post('/:id/ratings', addRating);

router.post('/:id/reports', reportAd);

router.put('/:id', updateAd);

router.delete('/:id', deleteAd);

module.exports = router;

// { name: 'article' },
// { name: 'real estate' },
// { name: 'service' },
// { name: 'vehicle' },
// { name: 'job' },
