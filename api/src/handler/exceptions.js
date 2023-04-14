const createMissingIdException = (message) => {
  const error = new Error(message);
  error.name = 'MissingIdException';
  error.statusCode = 400;
  return error;
};

const createInvalidInputException = (message) => {
  const error = new Error(message);
  error.name = 'InvalidInputException';
  error.statusCode = 400;
  return error;
};

module.exports = {
  createMissingIdException,
  createInvalidInputException,
};
