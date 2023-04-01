const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      weight: { type: DataTypes.FLOAT, allowNull: true },
      description: { type: DataTypes.STRING, allowNull: true },
      image: { type: DataTypes.STRING, allowNull: true },
      quantity: { type: DataTypes.INTEGER, allowNull: true },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
