import dotenv from "dotenv";

dotenv.config();

import { Sequelize } from "sequelize";

// import Category from "./models/Category.js";

// import Comment from "./models/Comment.js";

// import Option from "./models/Option.js";

// import Order from "./models/Order.js";

// import Product from "./models/Product.js";

// import User from "./models/User.js";

const database = process.env.DB_NAME || "vizta";

const username = process.env.DB_USER || "postgres";

const password = process.env.DB_PASSWORD || "your password";

const host = process.env.DB_HOST || "localhost";

const dialect = process.env.DB_DIALECT || "postgres";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false,
});

// Category(sequelize);

// Comment(sequelize);

// Option(sequelize);

// Order(sequelize);

// Product(sequelize);

// User(sequelize);

export { sequelize };
