const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("meeting_room", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  timezone: "+07:00",
  logging: false,
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, dbConnection };
