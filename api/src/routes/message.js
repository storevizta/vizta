const router = require('express').Router();

const {
  ask,
  response,
  searchMessageAd,
  searchMessageUser,
} = require('../controller/messageController.js');

router.get('/user', searchMessageUser);

router.get('/ad', searchMessageAd);

router.post('/', ask);

router.put('/', response);

module.exports = router;
