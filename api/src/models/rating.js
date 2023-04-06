const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Rating',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      punctuation: {
        type: DataTypes.INTEGER,
        allownull:false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      message: {
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
