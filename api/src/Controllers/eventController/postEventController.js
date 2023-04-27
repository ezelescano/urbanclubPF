const {Event} = require("../../db");

const postEventController = async (req) => {
    const {name, price, location, nameArena, date} = req.body;
    const newEvent = {
        name, 
        price,
        location,
        nameArena,
        date
    }
    await Event.create(newEvent);
    return newEvent;
};

module.exports = postEventController;