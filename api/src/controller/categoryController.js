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

module.exports = { getCategory };
