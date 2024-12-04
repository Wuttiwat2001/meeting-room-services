const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const { dbConnection } = require("./config/database.js");
const db = require("./models/index.js");
const app = express();
const PORT = 8081;

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

(async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
})();

app.listen(PORT, async () => {
  try {
    await dbConnection();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
});
