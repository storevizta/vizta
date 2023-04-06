const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Ads',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      image: {
        type: DataTypes.TEXT,
      },
      title: {
        type: DataTypes.STRING(70),
        allownull: false,
      },
      price: {
        type: DataTypes.INTEGER,
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
      oldPrice: {
        type: DataTypes.INTEGER,
      },
      discount: {
        type: DataTypes.INTEGER,
      },
      //Relations:
      ads_user: { type: DataTypes.INTEGER },
    },
    { freezeTableName: true }
  );
};
