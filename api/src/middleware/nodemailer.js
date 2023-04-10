require('dotenv').config();

const nodemailer = require('nodemailer');

const nmUser = process.env.NM_USER;

const nmPassword = process.env.NM_PASSWORD;

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: nmUser,
    pass: nmPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = { transporter };
