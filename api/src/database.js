require('dotenv').config();

const { Sequelize } = require('sequelize');

const modelAd = require('./models/Ad');

const modelCategory = require('./models/Category');

const modelFavorites = require('./models/Favorite');

const modelRating = require('./models/Rating');

const modelReport = require('./models/Report');

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

modelAd(sequelize);

modelCategory(sequelize);

modelFavorites(sequelize);

modelRating(sequelize);

modelReport(sequelize);

modelUser(sequelize);

const { Ad, Category, Favorite, Rating, Report, User } = sequelize.models;

// --- User ---

// User - Ad

User.hasMany(Ad);

Ad.belongsTo(User);

// User - Favorite

User.hasMany(Favorite);

Favorite.belongsTo(User);

// User - Report

User.hasMany(Report);

Report.belongsTo(User);

// User - Rating

User.hasMany(Rating);

Rating.belongsTo(User);

// --- Ad ---

// Ad - Category

Ad.belongsTo(Category);

Category.hasMany(Ad);

// Ad - Favorite

Ad.hasMany(Favorite);

Favorite.belongsTo(Ad);

// Ad - Report

Ad.hasMany(Report);

Report.belongsTo(Ad);

module.exports = { sequelize, ...sequelize.models };
