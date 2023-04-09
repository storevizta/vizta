require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'storevizta@gmail.com',
    pass: 'fhndtzhxomddvroo',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = { transporter };
