const {Router} = require("express");
const conversationRouter = Router();
const postConvHandler  = require('../Handlers/conversationHandler/postConvHandler')
const getConvHandler = require('../Handlers/conversationHandler/getConvHandler');
const delCovHandler = require("../Handlers/conversationHandler/delConvHandler");


conversationRouter.get("/:firstUserId/:secondUserId", postConvHandler);
conversationRouter.get("/:userId", getConvHandler);
conversationRouter.delete("del/:convId", delCovHandler);

module.exports = conversationRouter;