require('dotenv').config();

const { User } = require('../database');

const { 
  createMissingIdException, 
  createInvalidInputException 
} = require('../exceptions/exceptions')

const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const response = await User.findByPk(id);
      res.status(200).json(response);
    } else {
      //throw new Error('Missing Id');
      throw createMissingIdException('Missing Id')
    }
  } catch (error) {
    //res.status(400).json(error.message);
    res.status(error.statusCode).json({ message: error.message });
  }
};




const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, address } = req.body;
  try {
    if(!id){
      throw createMissingIdException('Id is missing');
    }
    if (name === undefined || email === undefined || password === undefined) {
      throw createInvalidInputException('Name, email and password are required');
    }
    if (email && !isValidEmail(email)) {
      throw createInvalidInputException('Invalid email format');
    }
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
    let statusCode = 500;
    let errorMessage = 'Internal Server Error';
    
    if (error.statusCode) {
      statusCode = error.statusCode;
      errorMessage = error.message;
    } else if (error.name === 'SequelizeUniqueConstraintError') {
      statusCode = 409;
      errorMessage = 'Unique constraint error';
    } else if (error.name === 'MissingIdException') {
      statusCode = 400;
      errorMessage = 'Missing Id';
    } else if (error.name === 'NotFoundException') {
      statusCode = 404;
      errorMessage = 'Resource not found';
    } else if (error.name === 'InvalidInputException') {
      statusCode = 400;
      errorMessage = 'Invalid input';
    }
    
    console.error(error);
    res.status(statusCode).json({ error: errorMessage });
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
