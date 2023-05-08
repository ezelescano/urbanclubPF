const { Router } = require("express");
const eventRouter = Router();
const {
    getEventsHandler, postEventHandler,
    detailEventHandler, delEventHandler,
    updateEventHandler, buyTicketHandler } = require("../Handlers/eventHandlar");
const fileupload = require("express-fileupload")


eventRouter.get("/", getEventsHandler);
eventRouter.get("/detailEvent/:id", detailEventHandler)
eventRouter.delete("/:id", delEventHandler);
eventRouter.post("/", fileupload({useTempFiles: true,tempFileDir: "./uploads"}), postEventHandler);
eventRouter.put("/update/:id", fileupload({useTempFiles: true,tempFileDir: "./uploads"}), updateEventHandler);
eventRouter.put("/buyTicket/:id", buyTicketHandler);

module.exports = eventRouter;
