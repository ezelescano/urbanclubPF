const {Router} = require("express");
const eventRouter = Router();
const {getEventsHandler, postEventHandler} = require("../Handlers/eventHandlar");
const delEventHandler = require("../Handlers/eventHandlar/delEventHandler");
const updateEventHandler = require("../Handlers/eventHandlar/updateEventHandler");

eventRouter.get("/", getEventsHandler);
eventRouter.delete("/:id", delEventHandler);
eventRouter.post("/", postEventHandler);
eventRouter.put("/:id", updateEventHandler);

module.exports = eventRouter;
