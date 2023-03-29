import dotenv from "dotenv";

dotenv.config();

import { Sequelize } from "sequelize";

import Categories from "./models/Categories.js";

import Comments from "./models/Comments.js";

import Options from "./models/Options.js";

import Orders from "./models/Orders.js";

import Products from "./models/Products.js";

import Users from "./models/Users.js";

const database = process.env.DB_NAME || "store";

const username = process.env.DB_USER || "postgres";

const password = process.env.DB_PASSWORD || "your password";

const host = process.env.DB_HOST || "localhost";

const dialect = process.env.DB_DIALECT || "postgres";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false,
});

Categories(sequelize);

Comments(sequelize);

Options(sequelize);

Orders(sequelize);

Products(sequelize);

Users(sequelize);

export default { database: sequelize, ...sequelize.models };
