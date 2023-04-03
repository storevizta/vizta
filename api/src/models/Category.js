const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM("article", "estate", "service", "vehicle"),
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
