const rootRouter = require("express").Router();
const authRouter = require("./auth.routes.js");

rootRouter.use("/auth", authRouter);


module.exports = rootRouter;