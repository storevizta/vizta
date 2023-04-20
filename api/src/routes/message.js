const router = require('express').Router();

const {
  ask,
  response,
  getMessages,
  getMessageById
} = require('../controller/messageController.js');

router.get("/", getMessages);

router.get("/:id", getMessageById);

router.post('/', ask);

router.put('/', response);

module.exports = router;
