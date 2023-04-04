const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: true },
      image: { type: DataTypes.STRING, allowNull: true },
      quantity: { type: DataTypes.INTEGER, allowNull: true },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};

// Anuncios:

// ID de anuncio (clave primaria)
// Título del anuncio
// Descripción del anuncio
// Categoría (inmuebles, vehículos, empleo, etc.)
// Precio
// Moneda (USD, EUR, MXN, etc.)
// Tipo de venta (venta, alquiler, intercambio)
// Ubicación (ciudad, estado, país)
// Fecha de publicación
// Fecha de caducidad (si se ha establecido una)
// Estado del anuncio (activo, inactivo, eliminado)
// ID de usuario (clave foránea) que publicó el anuncio
