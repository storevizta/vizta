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
  getUserMessages,
  getUserAdMessages,
} = require('../controller/usersController.js');

router.get('/:id', getUser);

router.get('/userads/:id', getUserAds);

router.get('/:id/favorites', getUserFavorites);

router.get('/usermessages/:id', getUserMessages);

router.get('/admessages/:id', getUserAdMessages);

router.get('/:id/ratings');

router.put('/', updateUser);

router.put('/:id/ratings');

router.post('/', createUser);

router.post('/:id/favorites', createFavorite);

router.post('/:id/ratings');

router.delete('/:id', deleteUser);

router.delete('/:id/favorites', deleteFavorite);

router.delete('/:id/ratings');

module.exports = router;
