const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Report', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    // adId: { type: DataTypes },
    // userId: { type: DataTypes },
    type: {
      type: DataTypes.ENUM('User', 'Advertisement'),
      allowNull: false,
    },
    reporterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reportedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
