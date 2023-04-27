const { Event } = require('../../db');

const updateEvent = async (eventId, body) => {
    if (!eventId) {
        throw new Error("Not specific Id")
    } else {
        console.log("//estoy en updatecont",eventId, body);

        const eventUp = await Event.findByPk(eventId);
        if (!eventUp) {
            throw new Error(`No event was found with that ${eventId}`)
        } else {
            await Event.update(body, { where: { id: eventId } })
        }
        return "Data updated successfully";
    }
}

module.exports = updateEvent;