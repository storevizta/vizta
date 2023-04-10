require('dotenv').config();

const { Ad, User } = require('../database.js');

const getAds = async (req, res) => {};

const getAdById = async (req, res) => {};

const getCategory = async (req, res) => {};

const getAdsByCategory = async (req, res) => {};

const searchAds = async (req, res) => {};

const createAd = async (req, res) => {
  const {
    userId,
    image,
    title,
    description,
    stock,
    price,
    oldPrice,
    discount,
  } = req.body;

  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const ad = await Ad.create({
    UserId: user.id,
    image,
    title,
    description,
    stock,
    price,
    oldPrice,
    discount,
  });

  return res.status(201).json(ad);
};

const addRating = async (req, res) => {};

const reportAd = async (req, res) => {};

const updateAd = async (req, res) => {};

const deleteAd = async (req, res) => {};

module.exports = {
  getAds,
  getAdById,
  getCategory,
  getAdsByCategory,
  searchAds,
  createAd,
  addRating,
  reportAd,
  updateAd,
  deleteAd,
};
