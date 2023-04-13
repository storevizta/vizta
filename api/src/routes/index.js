const router = require('express').Router();

const admin = require('./admin.js');

const ads = require('./ads.js');

const auth = require('./auth.js');

const category = require('./category.js');

const rating = require('./rating.js');

const report = require('./report.js');

const users = require('./users.js');

const message = require('./message.js');

router.use('/admin', admin);

router.use('/ads', ads);

router.use('/auth', auth);

router.use('/category', category);

router.use('/rating', rating);

router.use('/report', report);

router.use('/users', users);

router.use('/message', message);

module.exports = router;
