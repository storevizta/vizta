const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Ads',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true,
      },
      userId: { type: DataTypes },
      image: {
        type: DataTypes.TEXT,
        allownull: true,
      },
      title: {
        type: DataTypes.STRING(70),
        allownull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allownull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      oldPrice: {
        type: DataTypes.INTEGER,
        allownull: true,
      },
      discount: {
        type: DataTypes.INTEGER,
        allownull: true,
      },
    },
    { freezeTableName: true }
  );
};
