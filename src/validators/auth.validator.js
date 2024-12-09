const { body } = require("express-validator");

const register = [
  body("username", "Username must be at least 3 characters").isString().isLength({ min: 3 }),
  body("password", "Password must be at least 6 characters").isString().isLength({ min: 6 }),
  body("firstName", "First name is required").isString().isLength({ min: 1 }),
  body("lastName", "Last name is required").isString().isLength({ min: 1 }),
];


module.exports = { register };