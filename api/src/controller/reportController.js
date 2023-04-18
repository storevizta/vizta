require('dotenv').config();

const {
  Ad,
  Category,
  Favorite,
  Message,
  Rating,
  Report,
  User,
} = require('../database.js');

const createReport = async (req, res) => {
  const { type, reason, userId, adId } = req.body;

  try {
    if (type && reason && (userId || adId)) {
      const newReport = await Report.create({
        type: type,
        reason: reason,
        UserId: userId ? userId : null,
        AdId: adId ? adId : null,
      });
      return res.status(200).json(newReport);
    } else {
      return res.status(404).json('Please provide a type, a reason and Id');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteReport = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json('Missing ID');
  }

  const report = await Report.findByPk(id);

  try {
    if (report) {
      await report.destroy();
      res.status(200).json('The report was successfully deleted.');
    } else {
      return res.status(404).json('Report not found');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getReportById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json('Missing id');
  }

  const report = await Report.findByPk(id);

  try {
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json('Report not found');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserReports = async (req, res) => {};

const getAdReports = async (req, res) => {};

module.exports = {
  createReport,
  deleteReport,
  getReportById,
  getUserReports,
  getAdReports,
};
