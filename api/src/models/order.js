const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      // adsId: { type: DataTypes },
      // userId: { type: DataTypes },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      total: { type: DataTypes.INTEGER, allowNull: false },
      // status: { type: DataTypes.ENUM('', '', ''), allowNull: false },
    },
    { freezeTableName: true }
  );
};
//
