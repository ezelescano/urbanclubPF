const {Event,Artist} = require("../../db");

const getEventsController = async () => {
    const eventDB = await Artist.findAll({
        include:Event
    })
    return eventDB;
};

module.exports = getEventsController;