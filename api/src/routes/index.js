const router = require('express').Router();

const admin = require('./admin.js');

const ads = require('./ads.js');

const category = require('./category.js');

const rating = require('./rating.js');

const report = require('./report.js');

const message = require('./message.js');

const stripe = require('./stripe.js');

const users = require('./users.js');

router.use('/admin', admin);

router.use('/ads', ads);

router.use('/category', category);

router.use('/rating', rating);

router.use('/report', report);

router.use('/message', message);

router.use('/stripe', stripe);

router.use('/users', users);

module.exports = router;
