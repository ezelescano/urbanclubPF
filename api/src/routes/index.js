const { Router } = require("express");
const artistRouter = require("./artistRouter");
const eventRouter = require("./eventRouter");
const conversationRouter = require("./conversationRouter");
const messageRouter = require("./messageRouter");
const searchRouter = require("./searchRouter");
const ecommerce = require("./ecommerce");
const eventCommentRouter = require("./eventCommentRouter");

const mainRouter = Router();

mainRouter.use("/artist", artistRouter);
mainRouter.use("/events", eventRouter);
mainRouter.use("/conversation", conversationRouter);
mainRouter.use("/message", messageRouter);
mainRouter.use("/search", searchRouter);

mainRouter.use("/ticket",ecommerce)
mainRouter.use("/eventComments", eventCommentRouter);

module.exports = mainRouter;
