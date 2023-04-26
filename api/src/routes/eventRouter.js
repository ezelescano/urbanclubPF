const {Router} = require("express");
const eventRouter = Router();
const {getEventsHandler} = require("../Handlers/eventHandlar");

eventRouter.get("/", getEventsHandler);

module.exports = eventRouter;
