const {Router} = require("express");
const eventRouter = Router();
const {getEventsHandler, postEventHandler} = require("../Handlers/eventHandlar");

eventRouter.get("/", getEventsHandler);
eventRouter.post("/", postEventHandler);

module.exports = eventRouter;
