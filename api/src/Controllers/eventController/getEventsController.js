const { Event, Artist } = require("../../db");

const getEventsController = async () => {
    const eventDB = await Event.findAll({
        include: [{
            model: Artist,
            attributes: ['id', 'name']
        }]
    });
    return eventDB;
}
module.exports = getEventsController;