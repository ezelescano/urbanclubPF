const {Router} = require("express");
const messageRouter = Router();
const postMsgHandler = require('../Handlers/conversationHandler/postMsgHandler');
const getMsgHandler = require("../Handlers/conversationHandler/getMsgHandler");
const delMsgHandler = require("../Handlers/conversationHandler/delMsgHandler");

messageRouter.post("/", postMsgHandler)
messageRouter.get("/:convId", getMsgHandler)
messageRouter.delete("/:id", delMsgHandler)

module.exports = messageRouter;