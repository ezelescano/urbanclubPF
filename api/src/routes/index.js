const { Router } = require("express");
const artistRouter = require("./artistRouter");


const mainRouter = Router();

mainRouter.use("/artist", artistRouter)


module.exports = mainRouter;