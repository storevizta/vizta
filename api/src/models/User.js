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
      name: { type: DataTypes.STRING, allownull: false },
      username: { type: DataTypes.STRING, allownull: false },
      email: { type: DataTypes.STRING, allownull: false },
      password: { type: DataTypes.STRING, allownull: false },
      address: { type: DataTypes.ARRAY(DataTypes.STRING) },
    },
    { freezeTableName: true }
  );
};
