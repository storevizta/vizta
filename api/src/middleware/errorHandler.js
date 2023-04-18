// Creamos un middleware para el manejo de errores

const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500).json({ message: err.message });
};

module.exports = errorHandler;
