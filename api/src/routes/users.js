require('dotenv').config();

const router = require('express').Router();

const {
  getUsers,
  getUsersById,
  users,
} = require('../controller/usersController.js');

router.get('/', getUsers);

router.get('/:id', getUsersById);

router.post('/', users);

module.exports = router;
