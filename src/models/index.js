const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/database.js");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
