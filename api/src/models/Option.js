const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Option",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      value: { type: DataTypes.STRING, allowNull: false },
    },
    { freezeTableName: true, timestamps: false }
  );
};
