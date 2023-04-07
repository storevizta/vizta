const htppError = require('../handler/handlerError.js');

const { Ad, Category } = require('../database.js');

const getAds = async (req, res) => {
  const { title } = req.query;
  try {
    if (title) {
      const response = await Ad.findOne({
        where: { title: title },
      });
      res.status(200).json(response);
    } else {
      const response = await Ad.findAll();
      res.status(200).json(response);
    }
  } catch (e) {
    htppError(res, e);
  }
};

const getAdsById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const response = await Ad.findOne({
        where: { id: id },
      });
      res.status(200).json(response);
    } else {
      throw new Error('Falta el ID');
    }
  } catch (e) {
    htppError(res, e);
  }
};

const postAds = async (req, res) => {
  const {
    image,
    title,
    price,
    description,
    stock,
    oldPrice,
    discount,
    category,
  } = req.body;
  try {
    if (image || title || price || description || stock) {
      const newAds = await Ad.create({
        image,
        title,
        price,
        description,
        stock,
        oldPrice,
        discount,
      });

      const filter = await Category.findOne({
        where: { name: category },
      });

      await newAds.setCategory(filter);

      const response = await Ad.findOne({
        where: { id: newAds?.id },
        include: {
          model: Category,
        },
      });

      res.status(200).json(response);
    } else {
      throw new Error('Missing data');
    }
  } catch (e) {
    res.send(e.message);
  }
};

const getAdsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    if (category) {
      const post = await Category.findAll({
        where: { id: category },
        include: { model: Ad },
      });

      res.status(200).json(post);
    } else {
      throw new Error('Missing data');
    }
  } catch (e) {
    htppError(res, e);
  }
};

const putAds = async (req, res) => {
  const { changes } = req.body;
  const { id } = req.params;
  try {
    if (changes && id) {
      const post = await Ad.findOne({
        where: { id: id },
      });

      await post.update({
        image: changes.image,
        title: changes.title,
        price: changes.price,
        description: changes.description,
        stock: changes.stock,
        category: changes.category,
        discount: changes.discount,
        oldPrice: changes.oldPrice,
      });

      res.status(200).json(post);
    } else {
      throw new Error('Missing id or changes');
    }
  } catch (e) {
    htppError(res, e);
  }
};

const deleteAds = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const post = await Ad.findOne({
        where: { id: id },
      });

      if (post !== null) {
        post.destroy();
      }
    } else {
      throw new Error('Missing id');
    }
  } catch (e) {
    res.status(400).send();
  }
};

module.exports = {
  getAds,
  getAdsById,
  postAds,
  putAds,
  deleteAds,
  getAdsByCategory,
};
