require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const {
  createReport,
  deleteReport,
  getReportById,
  getUserReports,
  getAdReports,
} = require('../controller/reportControlle.js');

router.post('/', createReport);

router.delete('/:id', deleteReport);

router.get('/:id', getReportById);

router.get('/:userId', getUserReports);

router.get('/:addId', getAdReports);

module.exports = router;
