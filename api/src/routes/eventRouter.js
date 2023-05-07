const {Router} = require("express");
const eventRouter = Router();
const {getEventsHandler, postEventHandler} = require("../Handlers/eventHandlar");
const delEventHandler = require("../Handlers/eventHandlar/delEventHandler");
const updateEventHandler = require("../Handlers/eventHandlar/updateEventHandler");
const buyTicketHandler = require("../Handlers/eventHandlar/buyTicketHandler");
const fileupload = require("express-fileupload")


eventRouter.get("/", getEventsHandler);
eventRouter.delete("/:id", delEventHandler);
eventRouter.post("/", fileupload({useTempFiles: true,tempFileDir: "./uploads"}), postEventHandler);
eventRouter.put("/update/:id", fileupload({useTempFiles: true,tempFileDir: "./uploads"}), updateEventHandler);
eventRouter.put("/buyTicket/:id", buyTicketHandler);

module.exports = eventRouter;
