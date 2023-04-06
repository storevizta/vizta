const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Favorite',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true,
      },
      adId: { type: DataTypes },
      userId: { type: DataTypes },
      advertisement_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
