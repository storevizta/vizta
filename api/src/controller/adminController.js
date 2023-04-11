require('dotenv').config();
const {User, Ad }= require("../database.js");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {

  try {
    const users = await User.findAll()
    console.log(users)
    res.status(200).json(users)
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserById = async (req, res) => {
  const {id} = req.params;

  try {
    if(id){
      const user = await User.findByPk(id);
      res.status(200).json(user);
    }else {
      res.status(400).json("Missing ID")
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  const {id} = req.params;
  const {name, email, password, address} = req.body;
  try {
    if(id){
      const user = await User.findByPk(id);
      
      const hashedPassword = await bcrypt.hash(password, 10);
      const modifyUser = await user.update({
        name: name,
        email: email,
        password: hashedPassword,
        address: address
      })

      res.status(200).json(modifyUser)
    } else {
      res.status(400).json("Missing ID")
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
};

const deleteUser = async (req, res) => {
  const {id} = req.params;
  try {
    if(id){
      const user = await User.findByPk(id);
      await user.destroy();
      res.status(200).json("User deleted")
    } else {
      res.status(400).json("Missing ID")
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAds = async (req, res) => {
  try {
    const ads = await Ad.findAll();
    res.status(200).json(ads)
  } catch (error) {
    res.status(400).json(error.message)
  }
};

const getAdById = async (req, res) => {
  const {id} = req.params;
  try {
    if(id){
      const ad = await Ad.findByPk(id);
      res.status(200).json(ad);
    } else {
      res.status(400).json("Missing ID")
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
};

const updateAd = async (req, res) => {
  const {id} = req.params;
  const {image, title, description, stock, price, oldPrice, discount} = req.body;

  try {
    if(id){
      const ad = await Ad.findByPk(id);
      const updatedAd = await ad.update({
        image: image,
        title: title,
        description: description,
        stock: stock,
        price: price,
        oldPrice: oldPrice,
        discount: discount,
      });
      res.status(200).json(updatedAd)
    } else {
      res.status(400).json("Missing ID")
    }   
  } catch (error) {
    res.status(400).json(error.message)
  }
};

const deleteAd = async (req, res) => {
  const {id} = req.params;
  try {
    if(id){
      const ad = await Ad.findByPk(id);
      await ad.destroy();
      res.status(200).json("Ad Deleted")
    }else {
      res.status(400).json("Missing ID")
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAds,
  getAdById,
  updateAd,
  deleteAd,
};
