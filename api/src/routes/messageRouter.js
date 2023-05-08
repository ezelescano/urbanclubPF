const {Router} = require("express");
const messageRouter = Router();
const postMsgHandler = require('../Handlers/conversationHandler/postMsgHandler');
const getMsgHandler = require("../Handlers/conversationHandler/getMsgHandler");

messageRouter.post("/", postMsgHandler)
messageRouter.get("/:convId", getMsgHandler)

module.exports = messageRouter;