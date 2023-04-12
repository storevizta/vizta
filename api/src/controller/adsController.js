require('dotenv').config();

const { Op } = require('sequelize');

const { Ad, User, Category } = require('../database.js');

const { transporter } = require('../middleware/nodemailer.js');

const getAds = async (req, res) => {
  try {
    const {
      page = 0,
      size = 20,
      title,
      minPrice,
      maxPrice,
      sort,
      category,
    } = req.query;

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
    const { id } = req.params;

    const ad = await Ad.findByPk(id);

    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }

    return res.status(200).json(ad);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Failed to retrieve the data' });
  }
};

const createAd = async (req, res) => {
  try {
    const {
      userId,
      categoryId,
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

    const cat = await Category.findByPk(categoryId);

    if (!cat) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const ad = await Ad.create({
      UserId: user.id,
      CategoryId: cat.id,
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

const updateAd = async (req, res) => {
  try {
    const { id } = req.params;

    const { image, title, description, stock, price, oldPrice, discount } =
      req.body;

    if (id) {
      const ad = await Ad.findByPk(id);

      const updatedAd = await ad.update({
        image,
        title,
        description,
        stock,
        price,
        oldPrice,
        discount,
      });
      res.status(200).json(updatedAd);
    }
  } catch (error) {
    res.status(400).json({ message: 'Error' });
  }
};

const deleteAd = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Missing Id' });
    }

    const ad = await Ad.findByPk(id);

    if (!ad) {
      return res.status(400).json({ message: 'The ad does not exist' });
    }

    await ad.destroy();

    return res
      .status(200)
      .json({ message: 'The ad was successfully deleted.' });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAds,
  getAdById,
  createAd,
  updateAd,
  deleteAd,
};
