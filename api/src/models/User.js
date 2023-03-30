// import { DataTypes } from "sequelize";

// import sequelize from "../database.js";

// const User = sequelize.define("User", {
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     alowwNull: false,
//     primaryKey: true,
//   },
//   name: { type: DataTypes.STRING, allowNull: false },
//   username: { type: DataTypes.STRING, allowNull: false, unique: true },
//   email: { type: DataTypes.STRING, allowNull: false, unique: true },
//   password: { type: DataTypes, allowNull: false },
//   address: { type: DataTypes, allowNull: false },
//   phone: { type: DataTypes, allowNull: false, unique: true },
//   role: {
//     type: DataTypes.ENUM("user", "admin"),
//     allowNull: false,
//     defaultValue: "user",
//   },
//   status: {
//     type: DataTypes.ENUM("active", "suspended", "closed"),
//     allowNull: false,
//     defaultValue: "active",
//   },
// });

// export default User;
