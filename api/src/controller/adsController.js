const htppError = require('../handler/handlerError.js');

const { Ads, Category } = require('../database.js');

const getAds = async (req, res) => {
  const { title } = req.query;
  try {
    if (title) {
      const response = await Ads.findOne({
        where: { title: title },
      });
      res.status(200).json(response);
    } else {
      const response = await Ads.findAll();
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
      const response = await Ads.findOne({
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
      const newAds = await Ads.create({
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

      await newAds.setAds(filter);

      const response = await Ads.findOne({
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
    htppError(res, e);
  }
};

const getAdsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    if (category) {
      const post = await Category.findAll({
        where: { id: category },
        include: { model: Ads },
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
      const post = await Ads.findOne({
        where: { id: id },
      });
      const response = await post.update({ changes });
      res.status(200).json(response);
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
      const post = await Ads.findOne({
        where: { id: id },
      });
      const response = post.destroy();
      res.status(200).json(response);
    } else {
      throw new Error('Missing id');
    }
  } catch (e) {
    htppError(res, e);
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
