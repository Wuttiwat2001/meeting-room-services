const { body } = require("express-validator");

const register = [
  body("username").isString().isLength({ min: 3 }),
  body("password").isString().isLength({ min: 6 }),
  body("firstName").isString().isLength({ min: 1 }),
  body("lastName").isString().isLength({ min: 1 }),
];


module.exports = { register };