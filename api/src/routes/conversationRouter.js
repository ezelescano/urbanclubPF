const {Router} = require("express");
const conversationRouter = Router();
const postConvHandler  = require('../Handlers/conversationHandler/postConvHandler')
const getConvHandler = require('../Handlers/conversationHandler/getConvHandler')



conversationRouter.post("/", postConvHandler)
conversationRouter.get("/:userId", getConvHandler)

module.exports = conversationRouter;