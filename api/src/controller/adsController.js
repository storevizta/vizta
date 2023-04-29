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
      where: { state: 'Active' },
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

    if (sort === 'priceAsc') {
      options.order = [['price', 'ASC']];
    } else if (sort === 'priceDesc') {
      options.order = [['price', 'DESC']];
    } else if (sort === 'titleAsc') {
      options.order = [['title', 'ASC']];
    } else if (sort === 'titleDesc') {
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

    const count = await Ad.count(options);

    return res.status(200).json({
      length: count,
      ads: ads,
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

const getSubscribeUserAds = async (req, res) => {
  try {
    const subscribedUsers = await User.findAll({
      where: { subscribe: 'Subscribed' },
      attributes: ['id'],
    });

    const subscribedAds = await Ad.findAll({
      where: { UserId: { [Op.in]: subscribedUsers.map((user) => user.id) } },
    });

    return res.status(200).json(subscribedAds);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
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

const updateAd = async (req, res) => {
  try {
    const {
      adId,
      image,
      title,
      description,
      price,
      discount,
      condition,
      method,
      shipment,
      state,
    } = req.body;

    if (!adId) {
      return res.status(404).json('Missing ID');
    }

    const ad = await Ad.findByPk(adId);

    if (!ad) {
      return res.status(404).send({ error: 'Advertisment not found' });
    }

    const updateAd = await ad.update({
      image: image,
      title: title,
      description: description,
      price: price,
      discount: discount,
      condition: condition,
      method: method,
      shipment: shipment,
      state: state,
    });

    res.status(200).json(updateAd);
  } catch (error) {
    res.status(404).json(error.message);
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

const deleteAd = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json('Missing ID');
    }

    const ad = await Ad.findByPk(id);

    if (!ad) {
      return res.status(400).json('An ad with that ID was not found');
    } else {
      await ad.destroy();
      res.status(200).json('This ad was successfuly deleted');
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json(error.message);
  }
};

module.exports = {
  getAds,
  getAdById,
  getSubscribeUserAds,
  createAd,
  setStatusAd,
  updateAd,
  deleteAd,
};
