require('dotenv').config();

const router = require('express').Router();

const { users, getUsers } = require('../controller/usersController.js');

router.get('/', getUsers);

// router.get('/:id'); /* http://localhost:3001/users/ */

router.post('/', users);

module.exports = router;
