const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Ad', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    stock: {
      type: DataTypes.ENUM('in stock', 'out of stock'),
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    oldPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    state: { type: DataTypes.ENUM('Active', 'Sold', 'Paused') },
  });
};
