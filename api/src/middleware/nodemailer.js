require('dotenv').config();

const nodemailer = require('nodemailer');

const nm_pass = process.env.NM_PASS;

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'storevizta@gmail.com',
    pass: nm_pass,
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
