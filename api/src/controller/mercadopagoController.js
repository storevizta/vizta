require('dotenv').config();

const mercadopago = require('mercadopago');

const { sequelize } = require('../database');

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

mercadopago.configure({
  access_token:
    'APP_USR-6692975538978394-042219-d37b80b1c2522d0df0522dc6cc4d64e4-1174786288',
});

// const getSubscribeUserAds = async (req, res) => {
//   try {
//     const subscribedUsers = await User.findAll({
//       where: { subscribe: 'Subscribed' },
//       attributes: ['id'],
//     });

//     const options = {
//       limit: 5,
//       order: [['createdAt', 'DESC']],
//     };

//     const subscribedAds = await Ad.findAll({
//       where: { UserId: { [Op.in]: subscribedUsers.map((user) => user.id) } },
//       ...options,
//     });

//     return res.status(200).json(subscribedAds);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: 'Error' });
//   }
// };

const getSubscribeUserAds = async (req, res) => {
  try {
    const subscribedUsers = await User.findAll({
      where: { subscribe: 'Subscribed' },
      attributes: ['id'],
    });

    const options = {
      limit: 5,
      order: sequelize.literal('random()'),
    };

    const subscribedAds = await Ad.findAll({
      where: { UserId: { [Op.in]: subscribedUsers.map((user) => user.id) } },
      ...options,
    });

    return res.status(200).json(subscribedAds);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
  }
};

const createPreference = async (req, res) => {
  const { description, price, quantity, userId } = req.body;

  let preference = {
    items: [
      {
        title: description,
        unit_price: Number(price),
        quantity: Number(quantity),
      },
    ],
    back_urls: {
      success: 'https://viztastore.onrender.com/home',
      failure: 'https://viztastore.onrender.com/home',
      pending: 'https://viztastore.onrender.com/home',
    },
    auto_return: 'approved',
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      if (userId) {
        const user = User.findByPk(userId);

        if (user) {
          user.subscribe = 'Subscribed';

          user.save();
        }
      }

      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const feedback = async (req, res) => {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
};

module.exports = { getSubscribeUserAds, createPreference, feedback };
