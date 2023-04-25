require('dotenv').config();

const express = require('express');

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

const cors = require('cors');

const router = require('./routes/index.js');

const { sequelize } = require('./database.js');

const server = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

const port = process.env.PORT || 3001;

server.use(cookieParser());

server.use(bodyParser.urlencoded({ extended: false }));

server.use(bodyParser.json());

server.use(cors(corsOptions));

server.use('/', router);

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json('Internal Server Error');
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Synchronized tables');
    server.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error synchronizing models: ${err.message}`);
  });
