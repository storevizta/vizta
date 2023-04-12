require('dotenv').config();

const nodemailer = require('nodemailer');

const nmUser = process.env.NM_USER;

const nmPassword = process.env.NM_PASSWORD;

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "storevizta@gmail.com",
    pass: nmPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

module.exports = { transporter };
