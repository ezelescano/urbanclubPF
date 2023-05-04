const {Event,Artist} = require("../../db");

const getEventsController = async () => {
    console.log("hola")
    const eventDB = await Artist.findAll({
        include:Event
    })
    return eventDB;
};

module.exports = getEventsController;