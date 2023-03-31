import { DataTypes } from "sequelize";

import sequelize from "../database.js";

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "shipped", "delivered"),
      allowNull: false,
      defaultValue: "pending",
    },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    shippingAddress: { type: DataTypes.STRING, allowNull: false },
    orderAddress: { type: DataTypes.STRING, allowNull: false },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  { freezeTableName: true, timestamps: false }
);

export default Order;
