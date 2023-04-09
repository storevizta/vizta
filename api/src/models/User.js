const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING },
    address: { type: DataTypes.ARRAY(DataTypes.STRING) },
    role: {
      type: DataTypes.ENUM('visitor', 'user', 'admin'),
      allowNull: false,
      defaultValue: 'visitor',
    },
  });
};
