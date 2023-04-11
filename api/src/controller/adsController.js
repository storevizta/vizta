require('dotenv').config();

const { Op } = require('sequelize');

const { Ad, User } = require('../database.js');

const { transporter } = require('../middleware/nodemailer.js');

const getAds = async (req, res) => {
  try {
    const { title, page = 0, size = 20 } = req.query;

    const options = {
      limit: +size,
      offset: +page * +size,
    };

    if (title) {
      options.where = {
        title: {
          [Op.iLike]: `%${title}%`,
        },
      };
    }

    const ads = await Ad.findAll(options);

    return res.status(200).json(ads);
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: 'Failed to retrieve/get the data.' });
  }
};

const getAdById = async (req, res) => {
  try {
    const { id } = req.query;
  } catch (error) {}
};

const getCategory = async (req, res) => {};

const getAdsByCategory = async (req, res) => {};

const createAd = async (req, res) => {
  try {
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

    await transporter.sendMail({
      from: 'vizta <storevizta@gmail.com>',
      to: user.email,
      subject: 'Ad successfully published',
      text: 'Your post has been successfully created on the platform.',
    });

    return res.status(201).json(ad);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error' });
  }
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
  createAd,
  addRating,
  reportAd,
  updateAd,
  deleteAd,
};
