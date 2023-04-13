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
      category,
      minPrice,
      maxPrice,
      sort,
      discount,
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

    if (discount === 'true') {
      options.where.discount = {
        [Op.not]: null,
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

const updateAd = async (req, res) => {};

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
