const { Router } = require("express");
const artistRouter = require("./artistRouter");
const eventRouter = require("./eventRouter");


const mainRouter = Router();

mainRouter.use("/artist", artistRouter);
mainRouter.use("/events", eventRouter);


module.exports = mainRouter;