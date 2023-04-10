require('dotenv').config();
const { User } = require('../database');
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const response = await User.findByPk(id);
      res.status(200).json(response);
    } else {
      const response = await User.findAll();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const actualUser = await findByPk(id);
      const hashedPassword = await bcrypt.hash(actualUser.password, 10);
      actualUser.update({
        name: actualUser.name,
        email: actualUser.email,
        password: hashedPassword,
        address: actualUser.address,
      });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteUser = async (req, res) => {};

module.exports = { getUser, updateUser, deleteUser };
