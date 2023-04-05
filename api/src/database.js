require("dotenv").config();

const { Sequelize } = require("sequelize");

const database = process.env.DB_NAME || "vizta";

const username = process.env.DB_USER || "postgres";

const password =
  process.env.DB_PASSWORD || "44019204"; /* Your postgres password */

const host = process.env.DB_HOST || "localhost";

const dialect = process.env.DB_DIALECT || "postgres";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false /* Output of log messages in the console */,
});

const {} = sequelize.models;

module.exports = { sequelize, ...sequelize.models };
