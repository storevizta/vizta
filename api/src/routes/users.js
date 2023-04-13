require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const {
  getUser,
  updateUser,
  deleteUser,
} = require('../controller/usersController.js');

router.get('/:id', getUser);

router.get('/:id/ads');

router.get('/:id/favorites');

router.put('/:id', updateUser);

router.post('/:id/favorites');

router.delete('/:id', deleteUser);

router.delete('/:id/favorites/:favoriteId');

module.exports = router;
