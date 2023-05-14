const { Router } = require("express");
const eventCommentRouter = Router();
const getAllComentsHandler = require("../Handlers/comentsHandler/getAllComentsHandler");
const postCommentHandler = require("../Handlers/comentsHandler/postCommentHandler");
const delCommentHandler = require("../Handlers/comentsHandler/delCommentHandler");

eventCommentRouter.get("/:idEvent", getAllComentsHandler);
eventCommentRouter.post("/", postCommentHandler);
eventCommentRouter.delete("/:idComment", delCommentHandler);

module.exports = eventCommentRouter;
