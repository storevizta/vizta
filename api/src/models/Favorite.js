const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Favorite',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      advertisement_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      //Relations:
      fav_user: { type: DataTypes.INTEGER },
    },
    {
      timestamps: false,
    }
  );
};
