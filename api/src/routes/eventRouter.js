const {Router} = require("express");
const eventRouter = Router();
const {getEventsHandler, postEventHandler} = require("../Handlers/eventHandlar");
const delEventHandler = require("../Handlers/eventHandlar/delEventHandler");

eventRouter.get("/", getEventsHandler);
eventRouter.delete("/:id", delEventHandler);
eventRouter.post("/", postEventHandler);

module.exports = eventRouter;
