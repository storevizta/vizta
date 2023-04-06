const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Report',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      type: {
        type: DataTypes.ENUM('User', 'Advertisement'),
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
      //Relations:
      rep_user: { type: DataTypes.INTEGER },
    },
    { freezeTableName: true }
  );
};
