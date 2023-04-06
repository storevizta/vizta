const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        alowwNull: false,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, alowwNull: false },
      email: { type: DataTypes.STRING, alowwNull: false },
      password: { type: DataTypes.STRING, alowwNull: false },
      //Relations:
      ads_user: { type: DataTypes.INTEGER },
      fav_user: { type: DataTypes.INTEGER },
      ord_user: { type: DataTypes.INTEGER },
      rep_user: { type: DataTypes.INTEGER },
    },
    { freezeTableName: true }
  );
};
