require('dotenv').config();

const fs = require('fs');

const path = require('path');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'dpg-cgurfe4s3fvhrtsiqob0-a.oregon-postgres.render.com',
  port: 5432,
  database: 'vizta',
  username: 'vizta',
  password: 'iehVr9sOAKqUkqTdtyuQOMtG9WJC23vI',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Ad, Category, Favorite, Message, Rating, Report, User } =
  sequelize.models;

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

// User - Message

User.hasMany(Message);

Message.belongsTo(User);

// Ad - Category

Ad.belongsTo(Category);

Category.hasMany(Ad);

// Ad - Favorite

Ad.hasMany(Favorite);

Favorite.belongsTo(Ad);

// Ad - Report

Ad.hasMany(Report);

Report.belongsTo(Ad);

// Ad - Message

Ad.hasMany(Message);

Message.belongsTo(Ad);

module.exports = { sequelize, ...sequelize.models };
