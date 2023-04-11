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
      throw new Error('Missing Id');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, address } = req.body;
  try {
    if (id) {
      const actualUser = await User.findByPk(id);

      const hashedPassword = await bcrypt.hash(password, 10);
      const updated = await actualUser.update({
        name: name,
        email: email,
        password: hashedPassword,
        address: address,
      });
      res.status(200).json(updated);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const actualUser = await User.findByPk(id);
      await actualUser.destroy();
      res.status(200).json('Deleted!');
    } else {
      throw new Error('Missing Id');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getUser, updateUser, deleteUser };
