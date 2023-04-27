require('dotenv').config();

const router = require('express').Router();

const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAds,
  getAdById,
  updateAd,
  deleteAd,
  getMetrics,
} = require('../controller/adminController.js');

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.get('/', getMetrics);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.get('/ads', getAds);

router.get('/ads/:id', getAdById);

router.put('/ads/:id', updateAd);

router.delete('/ads/:id', deleteAd);

module.exports = router;
