const {Router} = require("express");
const eventRouter = Router();
const {getEventsHandler, postEventHandler} = require("../Handlers/eventHandlar");
const delEventHandler = require("../Handlers/eventHandlar/delEventHandler");
const updateEventHandler = require("../Handlers/eventHandlar/updateEventHandler");
const fileupload = require("express-fileupload")

eventRouter.get("/", getEventsHandler);
eventRouter.delete("/:id", delEventHandler);
eventRouter.post("/", fileupload({useTempFiles: true,tempFileDir: "./uploads"}), postEventHandler);
eventRouter.put("/update/:id", fileupload({useTempFiles: true,tempFileDir: "./uploads"}), updateEventHandler);


module.exports = eventRouter;
