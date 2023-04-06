require('dotenv').config();

const router = require('express').Router();

const { users, getUsers } = require('../controller/usersController.js');

router.get('/', getUsers);

router.post('/', users);

module.exports = router;
