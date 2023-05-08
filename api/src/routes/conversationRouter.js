const {Router} = require("express");
const conversationRouter = Router();
const postConvHandler  = require('../Handlers/conversationHandler/postConvHandler')
const getConvHandler = require('../Handlers/conversationHandler/getConvHandler');
const delConvHandler = require("../Handlers/conversationHandler/delConvHandler");


conversationRouter.get("/:firstUserId/:secondUserId", postConvHandler);
conversationRouter.get("/:userId", getConvHandler);
conversationRouter.delete("/:id", delConvHandler);

module.exports = conversationRouter;