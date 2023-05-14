const { cloudiconfig, DeletePhoto, loadPhoto } = require('../../../utils/cloudinary');
const { Event,Artist } = require('../../db');

const updateEvent = async (req) => {
    const { id } = req.params;
    const { body } = req;
    if (!id) {
        throw new Error("Not specific Id")
    } else {

        // const eventUp = await Event.findByPk(id);
        const event = await Event.findOne({
            where: { id },
            include:Artist
          });
          const id_Artis = event.Artists?.map(art=>art.id)
          
        if (!event) throw new Error(`No event was found with that ${id}`)
        // if (event.estado === DELETED)
        // throw new Error("No se encontró ningún usuario con ese ID");
       
        if (req.files) {
          
            const { eventPhoto} = req.files;
           
            cloudiconfig();
            if (eventPhoto) {
              if (event.id_eventPhoto) {
                await DeletePhoto(event.id_eventPhoto);
              }
              
             const updateEvent = await loadPhoto(eventPhoto.tempFilePath,"events",id_Artis.toString());
              body.id_eventPhoto = updateEvent.public_id;
              body.eventPhoto = updateEvent.secure_url;
            } else {
              body.id_eventPhoto = event.id_eventPhoto;
              body.eventPhoto = event.eventPhoto;
            }
          } else {
            body.id_eventPhoto = event.id_eventPhoto;
            body.eventPhoto = event.eventPhoto;
          }
            await Event.update(body, { where: { id: id } })
       
        return "Data updated successfully";
    }
}

module.exports = updateEvent;
