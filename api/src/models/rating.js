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
        validate: {
          min: 1,
          max: 5,
        },
      },
      message: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true }
  );
};
