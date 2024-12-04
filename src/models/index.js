const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.js");
const User = require("./User.js");

const db = {};

db.DataTypes = DataTypes;
db.sequelize = sequelize;

db.User = User(sequelize, DataTypes);


module.exports = db;