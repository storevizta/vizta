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

const { transporter } = require('../middleware/nodemailer.js');

const confirmSub = async (req, res) => {
  try {
    const { id, amoutn } = req.body;

    aw;
  } catch (error) {}
};

module.exports = {};
