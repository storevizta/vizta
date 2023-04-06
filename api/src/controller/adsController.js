const { Ads, Category } = require('../database.js');

const getAds = async (req, res) => {
  const { title } = req.query;

  if (title) {
    const response = await Ads.findOne({
      where: { title: title },
    });
    res.status(200).json(response);
  } else {
    const response = await Ads.findAll();
    res.status(200).json(response);
  }
};

const getAdsById = async (req, res) => {
  const { id } = req.params;

  if (id) {
    const response = await Ads.findOne({
      where: { id: id },
    });
    res.status(200).json(response);
  } else {
    throw new Error('Falta el ID');
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
};

const getAdsByCategory = async (req, res) => {
  const { category } = req.params;

  if (category) {
    const post = await Category.findAll({
      where: { id: category },
      include: { model: Ads },
    });

    res.status(200).json(post);
  } else {
    throw new Error('Missing data');
  }
};

const putAds = async (req, res) => {
  const { changes } = req.body;
  const { id } = req.params;

  if (changes && id) {
    const post = await Ads.findOne({
      where: { id: id },
    });
    const response = await post.update({ changes });
    res.status(200).json(response);
  } else {
    throw new Error('Missing id or changes');
  }
};

const deleteAds = async (req, res) => {
  const { id } = req.params;

  if (id) {
    const post = await Ads.findOne({
      where: { id: id },
    });
    const response = post.destroy();
    res.status(200).json(response);
  } else {
    throw new Error('Missing id');
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
