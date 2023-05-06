const { cloudiconfig, DeletePhoto } = require("../../../utils/cloudinary");
const { Event } = require("../../db");


const deleteEvent = async (idEvent) => {
    if (!idEvent) {
        throw new Error("Not specific Id")
    } else {
        const delPhoto = await Event.findOne({ where: { id: idEvent } })
        cloudiconfig();
        await  DeletePhoto(delPhoto.id_eventPhoto)
        
        const delInfo = await Event.destroy({ where: { id: idEvent } })
        if (!delInfo) {
            throw new Error(`No event was found with that ${idEvent}`)
        }
    }
}


module.exports = deleteEvent;