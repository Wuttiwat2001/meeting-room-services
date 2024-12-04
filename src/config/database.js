const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("meeting_room", "user", "password", {
  host: "meeting-room-db",
  dialect: "mysql",
  timezone: "+07:00",
  logging: false,
});

module.exports = sequelize;
