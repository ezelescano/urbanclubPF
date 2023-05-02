const {Event} = require("../../db");

const getEventsController = async () => {
    const eventDB = await Event.findAll();
    return eventDB;
};

module.exports = getEventsController;