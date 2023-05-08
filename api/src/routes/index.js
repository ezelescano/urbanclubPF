const { Router } = require("express");
const artistRouter = require("./artistRouter");
const eventRouter = require("./eventRouter");
const conversationRouter = require("./conversationRouter");
const messageRouter = require("./messageRouter");

const mainRouter = Router();

mainRouter.use("/artist", artistRouter);
mainRouter.use("/events", eventRouter);
mainRouter.use("/conversation", conversationRouter)
mainRouter.use("/message", messageRouter)


module.exports = mainRouter;