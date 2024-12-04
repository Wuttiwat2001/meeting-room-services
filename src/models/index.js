const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.js");

const db = {};

db.DataTypes = DataTypes;
db.sequelize = sequelize;
