require("dotenv").config();

const { Sequelize } = require("sequelize");

const Category = require("./models/Category.js");

const Comment = require("./models/Comment.js");

const Option = require("./models/Option.js");

const Order = require("./models/Order.js");

const Product = require("./models/Product.js");

const User = require("./models/User.js");

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

// Category(sequelize);

// Comment(sequelize);

// Option(sequelize);

// Order(sequelize);

// Product(sequelize);

// User(sequelize);

// // Product - Category

// Category.belongsToMany(Product, { through: "Product_Category" });

// Product.belongsToMany(Category, { through: "Product_Category" });

// // Product - Comment

// Product.hasMany(Comment);

// Comment.belongsTo(Product);

// // Product - Option

// Product.hasMany(Option);

// Option.belongsTo(Product);

// // Order - Product

// Order.belongsToMany(Product, { through: "OrderProduct" });

// Product.belongsToMany(Order, { through: "OrderProduct" });

// // User - Order

// User.hasMany(Order);

// Order.belongsTo(User);

module.exports = { sequelize, ...sequelize.models };
