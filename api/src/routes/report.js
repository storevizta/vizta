require('dotenv').config();

const router = require('express').Router();

const {
  createReport,
  deleteReport,
  getReportById,
  getUserReports,
  getAdReports,
} = require('../controller/reportController.js');

router.post('/', createReport);

router.delete('/:id', deleteReport);

router.get('/:id', getReportById);

router.get('/user/:userId', getUserReports);

router.get('/ad/:adId', getAdReports);

module.exports = router;
