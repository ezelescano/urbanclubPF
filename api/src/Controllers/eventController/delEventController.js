const { Event } = require("../../db");


const deleteEvent = async (idEvent) => {
    if (!idEvent) {
        throw new Error("Not specific Id")
    } else {
        const delInfo = await Event.destroy({ where: { id: idEvent } })
        if (!delInfo) {
            throw new Error(`No event was found with that ${idEvent}`)
        }
    }
}


module.exports = deleteEvent;