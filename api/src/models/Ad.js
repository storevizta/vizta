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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    condition: {
      type: DataTypes.ENUM('New', 'Used'),
      allowNull: false,
      defaultValue: 'New',
    },
    state: {
      type: DataTypes.ENUM('Active', 'Sold', 'Paused'),
      allowNull: false,
      defaultValue: 'Active',
    },
  });
};
