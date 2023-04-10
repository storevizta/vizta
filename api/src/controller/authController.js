require('dotenv').config();

const { google } = require('googleapis');

const validator = require('email-validator');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { User } = require('../database.js');

const { oauth2Client } = require('../middleware/authGoogle.js');

const { transporter } = require('../middleware/nodemailer.js');

const key = process.env.JWT_SECRET;

const expiration = process.env.JWT_EXPIRATION;

const singUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Please provide your name, email, and password' });
    }

    if (!validator.validate(email)) {
      return res
        .status(400)
        .json({ message: 'Please provide a valid email address' });
    }

    const user = await User.findOne({ where: { email: email } });

    if (user) {
      return res
        .status(409)
        .json({ message: 'The email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await transporter.sendMail({
      from: 'vizta <storevizta@gmail.com>',
      to: email,
      subject: 'Welcome to our website!',
      text: 'Welcome to our website! We are delighted that you have decided to register on our platform and become a part of our online community.',
    });

    res.status(201).json({ message: 'Successful registration' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Failed registration' });
  }
};

const singIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Please provide your email, and password' });
    }

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ message: 'The email could not be found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'The password is incorrect.' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, key, {
      expiresIn: expiration,
    });

    const responseData = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    };

    return res
      .status(200)
      .json({ message: 'Successful login', data: responseData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Failed login' });
  }
};

const singInGoogle = async (req, res) => {
  // http://localhost:3001/auth/singingoogle
  try {
    const authorizeUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    });

    const { code } = req.query;

    if (!code) {
      return res.redirect(authorizeUrl);
    }

    const { tokens } = await oauth2Client.getToken(code);

    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: 'v2',
    });

    const { data } = await oauth2.userinfo.get();

    let user = await User.findOne({ where: { email: data.email } });

    if (!user) {
      user = await User.create({
        name: data.name,
        email: data.email,
        password: 'default', // Contraseña temporal para usuarios de Google
      });

      await transporter.sendMail({
        from: 'vizta <storevizta@gmail.com>',
        to: data.email,
        subject: 'Welcome to our website!',
        text: 'Welcome to our website! We are delighted that you have decided to register on our platform and become a part of our online community.',
      });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, key, {
      expiresIn: expiration,
    });

    const responseData = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    };

    res.status(200).json({ message: 'Successful login', data: responseData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Failed login' });
  }
};

module.exports = { singUp, singIn, singInGoogle };
