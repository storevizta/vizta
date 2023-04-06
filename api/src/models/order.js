const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      buyerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      toPay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      //Relations:
      ord_user: { type: DataTypes.INTEGER },
    },
    { freezeTableName: true }
  );
};
