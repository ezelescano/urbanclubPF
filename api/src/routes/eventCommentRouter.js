const { Router } = require("express");
const eventCommentRouter = Router();
const getAllComentsHandler = require("../Handlers/comentsHandler/getAllComentsHandler");
const postCommentHandler = require("../Handlers/comentsHandler/postCommentHandler");

eventCommentRouter.get("/", getAllComentsHandler);
eventCommentRouter.post("/", postCommentHandler);

module.exports = eventCommentRouter;
