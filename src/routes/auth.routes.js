const authRouter = require("express").Router();
const controllers = require("../controllers/auth.controller.js");
const validates = require("../validators/auth.validator.js")

authRouter.post("/register",validates.register,controllers.register);

module.exports = authRouter;
