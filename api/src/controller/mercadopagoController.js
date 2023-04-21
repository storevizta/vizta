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
    'APP_USR-4871149183520475-042020-19ad63e6a5e3586b247ec9a7ca6903a3-182007561',
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
      success: 'http://localhost:3001/feedback',
      failure: 'http://localhost:3001/feedback',
      pending: 'http://localhost:3001/feedback',
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
