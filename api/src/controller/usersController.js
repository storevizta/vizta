const htppError = require('../handler/handlerError.js');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const key = process.env.KEY || 'secretkey';

const User = require('../database.js');

const { Op } = require('sequelize');

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing parameters' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(401)
        .json({ message: 'This email is already registered' });
    }

    const newUser = await Videogame.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    });

    return res.status(201).json({ message: 'User created successfully' });
  } catch (e) {
    htppError(res, e);
  }
};

const signIn = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const signOut = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

//Get / users
const getUsers = async (req, res) => {
  try {
    const { name } = req.query

    let users;
    if(name) {
      users = await User.findAll({
        where: {
          name: {
            [Op.like]: `%${name}`
          },
        },
      });
    } else {
      users = await User.findAll();
    }
    res.json(users);    
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersById = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersAds = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersOrders = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersFavorites = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersRating = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

module.exports = {
  signUp,
  signIn,
  signOut,
  getUsers,
  getUsersById,
  getUsersAds,
  getUsersOrders,
  getUsersFavorites,
  getUsersRating,
};
