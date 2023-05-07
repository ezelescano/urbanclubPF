const { Router } = require("express");
const artistRouter = require("./artistRouter");
const eventRouter = require("./eventRouter");
const searchRouter = require("./searchRouter");

const mainRouter = Router();

mainRouter.use("/artist", artistRouter);
mainRouter.use("/events", eventRouter);
mainRouter.use("/search", searchRouter);


module.exports = mainRouter;