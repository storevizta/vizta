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

router.get('/:userId', getUserReports);

router.get('/:addId', getAdReports);

module.exports = router;
