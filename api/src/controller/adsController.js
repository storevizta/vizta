require('dotenv').config();

const { Op } = require('sequelize');

const {
  Ad,
  Category,
  Favorite,
  Message,
  Rating,
  Report,
  User,
} = require('../database.js');

const { transporter } = require('../middleware/nodemailer.js');

const getAds = async (req, res) => {
  try {
    const {
      page = 0,
      size = 20,
      title,
      category,
      minPrice,
      maxPrice,
      sort,
      discount,
      condition,
    } = req.query;

    const options = {
      limit: +size,
      offset: +page * +size,
      where: {},
      order: [['createdAt', 'DESC']],
    };

    if (title) {
      options.where.title = {
        [Op.iLike]: `%${title}%`,
      };
    }

    if (category) {
      const cat = await Category.findOne({ where: { id: category } });

      if (!cat) {
        return res.status(404).json({ message: 'Category not found' });
      }

      options.where.CategoryId = cat.id;
    }

    if (minPrice && maxPrice) {
      options.where.price = {
        [Op.between]: [+minPrice, +maxPrice],
      };
    } else if (minPrice) {
      options.where.price = {
        [Op.gte]: +minPrice,
      };
    } else if (maxPrice) {
      options.where.price = {
        [Op.lte]: +maxPrice,
      };
    }

    if (sort === 'asc') {
      options.order = [['title', 'ASC']];
    } else if (sort === 'desc') {
      options.order = [['title', 'DESC']];
    }

    if (discount) {
      options.where.discount = {
        [Op.eq]: +discount,
      };
    }

    if (condition === 'new') {
      options.where.condition = 'New';
    } else if (condition === 'used') {
      options.where.condition = 'Used';
    }

    const ads = await Ad.findAll(options);

    const count = await Ad.count();

    return res.status(200).json({
      length: ads.length,
      ads: ads,
      count: count,
    });
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
      price,
      discount,
      condition,
      method,
      shipment,
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
      price,
      discount,
      condition,
      method,
      shipment,
    });

    return res.status(201).json({ message: 'Ad create' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error creating ad', error });
  }
};

const setStatusAd = async () => {
  try {
    const { status, adId } = req.body;

    const actualAd = await Ad.findByPk(adId);
    const adMod = actualAd.update({ state: status });
    res.status(200).json(adMod);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};

module.exports = {
  getAds,
  getAdById,
  createAd,
  setStatusAd,
};
