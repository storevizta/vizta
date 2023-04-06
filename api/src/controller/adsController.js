const { Ad, User } = require('../database.js');

const getAd = async (req, res) => {};

const getAdById = async (req, res) => {};

const postAd = async (req, res) => {
  const {
    image,
    title,
    description,
    stock,
    price,
    oldPrice,
    discount,
    userId,
  } = req.body;

  const ad = await Ad.create({
    image,
    title,
    description,
    stock,
    price,
    oldPrice,
    discount,
    userId: userId,
  });

  return res.status(201).json({ ad });
};

module.exports = { getAd, getAdById, postAd };
