const {Router} = require("express");
const eventRouter = Router();
const {getEventsHandler} = require("../Handlers/eventHandlar");
const delEventHandler = require("../Handlers/eventHandlar/delEventHandler");

eventRouter.get("/", getEventsHandler);
eventRouter.delete("/:id", delEventHandler);

module.exports = eventRouter;
