const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Rating',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      adId: { type: DataTypes },
      userId: { type: DataTypes },
      rating: {
        type: DataTypes.INTEGER,
        allownull:false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      comment: {
        type: DataTypes.STRING,
        allownull:false
      },
      UserId:{
        type: DataTypes.INTEGER,
        allownull:false
      },
      adsId:{
        type: DataTypes.INTEGER,
        allownull:false
      }
    },
    { freezeTableName: true }
  );
};
