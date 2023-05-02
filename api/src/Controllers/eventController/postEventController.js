const {Event} = require("../../db");

const postEventController = async (req) => {
    const {eventPhoto, name, price, location, nameArena, date} = req.body;
    const newEvent = {
        eventPhoto,
        name, 
        price,
        location,
        nameArena,
        date
    }
    await Event.create(newEvent);
    console.log("////soy el event", newEvent);
    return newEvent;
};

module.exports = postEventController;