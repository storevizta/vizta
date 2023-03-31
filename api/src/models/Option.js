import { DataTypes } from "sequelize";

import sequelize from "../database.js";

const Option = sequelize.define("Option", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Option;
