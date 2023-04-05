const httpError = (res, err) => {
  console.log(err);
  res.status(500).send({ error: 'Something went wrong' });
};

module.exports = { httpError };
