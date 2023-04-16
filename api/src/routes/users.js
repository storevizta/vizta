require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const {
  getUser,
  updateUser,
  deleteUser,
  getUserAds,
  getUserFavorites,
  createFavorite,
  deleteFavorite,
} = require('../controller/usersController.js');

router.get('/:id', getUser);

router.get('/:id/ads', getUserAds);

router.get('/:id/favorites', getUserFavorites);

router.put('/:id', updateUser);

router.post('/:id/favorites', createFavorite);

router.delete('/:id', deleteUser);

router.delete('/:id/favorites', deleteFavorite);

router.get('/:id/ratings');

router.get('/:id/ratings');

router.post('/:id/ratings');

router.put('/:id/ratings');

router.delete('/:id/ratings');

module.exports = router;
