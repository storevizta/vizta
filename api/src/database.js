require('dotenv').config();

const { Sequelize } = require('sequelize');

const Ads = require('./models/Ads');

const Category = require('./models/Category');

const Favorites = require('./models/Favorite');

const Order = require('./models/Order');

const Rating = require('./models/Rating');

const Report = require('./models/Report');

const User = require('./models/User');

const database = process.env.DB_NAME || 'vizta';

const username = process.env.DB_USER || 'postgres'; /* Your postgres username */

const password =
  process.env.DB_PASSWORD || '44019204'; /* Your postgres password */

const host = process.env.DB_HOST || 'localhost';

const dialect = process.env.DB_DIALECT || 'postgres';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false /* Output of log messages in the console */,
});

Ads(sequelize);

Category(sequelize);

Favorites(sequelize);

Order(sequelize);

Rating(sequelize);

Report(sequelize);

User(sequelize);

const { Ads, Category, Favorite, Order, Rating, Report, User } =
  sequelize.models;

// --- User ---

// User - Ads

User.hasMany(Ads);

Ads.belongsTo(User);

// User - Favorite

User.hasMany(Favorite);

Favorite.belongsTo(User);

// User - Order

User.hasMany(Order);

Order.belongsTo(User);

// User - Report

User.hasMany(Report);

Report.belongsTo(User);

// --- Ads ---

// Ads - Category

Ads.belongsTo(Category);

Category.hasMany(Ads);

// Ads - Favorite

Ads.hasMany(Favorite);

Favorite.belongsTo(Ads);

// Ads - Order

Ads.hasMany(Order);

Order.belongsTo(Ads);

// Ads - Rating

Ads.hasMany(Rating);

Rating.belongsTo(Ads);

// Ads - Report

Ads.hasMany(Report);

Report.belongsTo(Ads);

module.exports = { sequelize, ...sequelize.models };
