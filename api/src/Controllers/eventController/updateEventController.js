const { Event } = require('../../db');

const updateEvent = async (eventId, body) => {
    if (!eventId) {
        throw new Error("Not specific Id")
    } else {
        const eventUp = await Event.findByPk(eventId);
        if (!eventUp) {
            throw new Error(`No event was found with that ${eventId}`)
        } else {
            await Event.update(body, { where: { id: parseInt(eventId) } })
        }
        return "Data updated successfully";
    }
}

module.exports = updateEvent;
