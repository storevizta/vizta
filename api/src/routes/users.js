require('dotenv').config();

const router = require('express').Router();

const {
  getUser,
  getUserAds,
  getUserFavorites,
  createUser,
  createFavorite,
  updateUser,
  deleteUser,
  deleteFavorite,
} = require('../controller/usersController.js');

router.get('/:id', getUser);

router.get('/userads/:id', getUserAds);

router.get('/:id/favorites', getUserFavorites);

router.get('/:id/ratings');

router.put('/:id', updateUser);

router.put('/:id/ratings');

router.post('/', createUser);

router.post('/:id/favorites', createFavorite);

router.post('/:id/ratings');

router.delete('/:id', deleteUser);

router.delete('/:id/favorites', deleteFavorite);

router.delete('/:id/ratings');

module.exports = router;
