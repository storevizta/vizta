require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const {
  getUser,
  updateUser,
  deleteUser,
} = require('../controller/usersController.js');

router.get('/:id', verifyToken, authorize('admin'), getUser);

router.get('/:id/ads');

router.get('/:id/favorites');

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
