const { Sequelize } = require("sequelize");

const dbConnection = async () => {
  const sequelize = new Sequelize("meeting_room", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    timezone: "+07:00",
    logging: true,
  });
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { dbConnection };
