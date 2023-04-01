const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: { type: DataTypes.STRING, allowNull: false },
      rating: { type: DataTypes.INTEGER, allowNull: false },
    },
    { freezeTableName: true, timestamps: false }
  );
};
