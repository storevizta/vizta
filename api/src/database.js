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

const ads = require("./models/ads")
const category = require("./models/category")
const order = require("./models/order")
const rating = require("./models/rating")
const report = require("./models/report")
const user = require("./models/user")
const favorites = require("./models/favorites")

ads(sequelize)
category(sequelize)
order(sequelize)
rating(sequelize)
report(sequelize)
user(sequelize)
favorites(sequelize)

const {Ads, Category, Order, Rating, Report, User, Favorite} = sequelize.models;

//user
User.hasMany(Ads)
Ads.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Rating)
Order.belongsTo(User)

User.hasMany(Report)
Report.belongsTo(User)

User.hasMany(Favorite)
Favorite.belongsTo(User)

//Ads
Ads.hasMany(Rating)
Rating.belongsTo(Ads)

Ads.hasMany(Order)
Order.belongsTo(Ads)

Ads.hasMany(Report)
Report.belongsTo(Ads)

Category.hasMany(Ads)
Ads.belongsTo(Rating)

Ads.hasMany(Favorite)
Favorite.belongsTo(Ads)





module.exports = { sequelize, ...sequelize.models };
