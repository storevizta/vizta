require('dotenv').config();

const router = require('express').Router();

const {
  createRating,
  getRatingById,
  getRatingByUser,
  deleteRating,
  updateRating,
} = require('../controller/ratingController.js');

router.post('/', createRating);

router.get('/:id', getRatingById);

router.get('/:userId', getRatingByUser);

router.delete('/:id', deleteRating);

router.put('/:id', updateRating);

module.exports = router;
