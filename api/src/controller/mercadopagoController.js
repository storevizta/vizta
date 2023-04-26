require('dotenv').config();

const mercadopago = require('mercadopago');

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

const createPreferenc = async (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: 'http://localhost:3000/home',
      failure: 'http://localhost:3000/home',
      pending: 'http://localhost:3000/home',
    },
    auto_return: 'approved',
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
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

module.exports = { createPreferenc, feedback };
