require('dotenv').config();

const {
  Ad,
  Category,
  Favorite,
  Message,
  Rating,
  Report,
  User,
} = require('../database.js');

const getCategory = async (req, res) => {
  try {
    const existingCats = await Category.findAll({ attributes: ['id', 'name'] });

    if (existingCats.length === 0) {
      await Category.bulkCreate([
        { name: 'Article' },
        { name: 'Real Estate' },
        { name: 'Service' },
        { name: 'Vehicle' },
        { name: 'Job' },
      ]);
    }

    const cats = await Category.findAll({ attributes: ['id', 'name'] });

    if (cats.length > 0) {
      const responseData = cats.map((cat) => ({ id: cat.id, name: cat.name }));

      return res.status(200).json(responseData);
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: 'Failed to retrieve the data' });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const existingCategory = await Category.findOne({ where: { name } });

    if (!existingCategory) {
      const category = await Category.create({ name });

      return res.status(201).json({ message: 'Category created' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error creating category', error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { name } = req.params;

    const category1 = await Category.findOne({ where: { name: name } });

    if (!category1) {
      return res.status(404).json('Category ID invalid');
    }

    await category1.destroy();

    return res
      .status(200)
      .json({ message: 'The category was successfully deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error creating category' });
  }
};

module.exports = { getCategory, createCategory, deleteCategory };
