require('dotenv').config();

const { Sequelize } = require('sequelize');

const modelAds = require('./models/ads');

const modelCategory = require('./models/Category');

const modelFavorites = require('./models/Favorite');

const modelOrder = require('./models/order');

const modelRating = require('./models/rating');

const modelReport = require('./models/report');

const modelUser = require('./models/User');

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

modelAds(sequelize);

modelCategory(sequelize);

modelFavorites(sequelize);

modelOrder(sequelize);

modelRating(sequelize);

modelReport(sequelize);

modelUser(sequelize);

const { Ads, Category, Favorite, Order, Rating, Report, User } =
  sequelize.models;

// --- User ---

// User - Ads

User.hasMany(Ads, { foreignKey: 'ads_user' });

Ads.belongsTo(User, { foreignKey: 'ads_user' });

// User - Favorite

User.hasMany(Favorite, { foreignKey: 'fav_user' });

Favorite.belongsTo(User, { foreignKey: 'fav_user' });

// User - Order

User.hasMany(Order, { foreignKey: 'ord_user' });

Order.belongsTo(User, { foreignKey: 'ord_user' });

// User - Report

User.hasMany(Report, { foreignKey: 'rep_user' });

Report.belongsTo(User, { foreignKey: 'rep_user' });

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
