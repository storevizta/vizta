const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.ENUM(
          'article',
          'real estate',
          'service',
          'vehicle',
          'job'
        ),
      },
    },
    { freezeTableName: true }
  );
};
