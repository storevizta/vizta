const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Ad', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
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
      type: DataTypes.DECIMAL,
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
    method: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    shipment: {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: false,
      defaultValue: 'No',
    },
    state: {
      type: DataTypes.ENUM('Active', 'Sold', 'Paused'),
      allowNull: false,
      defaultValue: 'Active',
    },
  });
};
