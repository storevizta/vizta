require('dotenv').config();

const {
  Ad,
  Category,
  Favorite,
  Message,
  Rating,
  Report,
  User,
} = require('../database');

const {transporter} = require("../middleware/nodemailer.js");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Missing Id' });
    }

    if (id) {
      const response = await User.findByPk(id);

      res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error get user', error });
  }
};

const getUserAds = async (req, res) => {
  try {
    const { id } = req.params;

    const userAds = await Ad.findAll({ where: { UserId: id } });

    if (!userAds) {
      return res.status(400).json({ message: 'User not found' });
    }

    return res.status(200).json(userAds);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
  }
};

const getUserFavorites = async (req, res) => {};

const getUserMessages = async (req, res) => {
  try {
    const { id } = req.params;

    const userMessages = await Message.findAll({ where: { UserId: id } });

    if (!userMessages) {
      return res.status(400).json({ message: 'User not found' });
    }

    return res.status(200).json(userMessages);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
  }
};

const createUser = async (req, res) => {
  try {
    const { id, name, nickname, email, picture } = req.body;

    const existingUser = await User.findOne({ where: { id } });

    if (existingUser) {
      return res.status(200).json({ message: 'User alredy exists' });
    }
    if (!existingUser) {
      const user = await User.create({
        id,
        name,
        nickname,
        email,
        picture,
      });

      await transporter.sendMail({
        from: "vizta <storevizta@gmail.com>",
        to: email,
        subject: "Welcome to our website!",
        text: "Welcome to our website! We are delighted that you decided to register on our platform and become a part of our online community.",
      });
      
      return res.status(201).json({ message: 'User create' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error creating user', error });
  }
};

const createFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json('User ID invalid');
    }

    const newFavorite = await Favorite.create({
      UserId: id,
    });
    return res.status(200).json(newFavorite);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  const { id, name, nickname, email, picture, address, phone } = req.body;
  try {
    const actualUser = await User.findByPk(id);
    await actualUser.update({
      name: name,
      nickname: nickname,
      email: email,
      picture: picture,
      address: address,
      phone: phone,
    });

    res.status(200).json('All fine!');
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};

const deleteUser = async (req, res) => {};

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    const favorite = await Favorite.findByPk(id);

    if (!favorite) {
      return res.status(404).json('Favorite ID invalid');
    }

    await favorite.destroy();

    return res
      .status(200)
      .json({ message: 'The favorite was successfully deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error creating favorite' });
  }
};

const getUserAdMessages = async (req, res) => {
  try {
    const { id } = req.params;

    const adMessages = await Message.findAll({ where: { AdId: id } });

    if (!adMessages) {
      return res.status(400).json({ message: 'Ad not found' });
    }

    return res.status(200).json(adMessages);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

module.exports = {
  getUser,
  getUserAds,
  getUserFavorites,
  createUser,
  createFavorite,
  updateUser,
  deleteUser,
  deleteFavorite,
  getUserMessages,
  getUserAdMessages,
};
