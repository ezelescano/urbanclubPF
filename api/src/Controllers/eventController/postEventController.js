const { cloudiconfig,loadPhoto } = require("../../../utils/cloudinary");
const {Event} = require("../../db");
const {Artist} = require("../../db");

const postEventController = async (req) => {
    const { name, price, location, nameArena, date,id_Artist} = req.body;
    let photoEvent = {}
    if (req.files) {
        const {eventPhoto} = req.files
        cloudiconfig()
        if (eventPhoto)  {
            photoEvent = await loadPhoto(eventPhoto.tempFilePath,"events",id_Artist);
            console.log(photoEvent)
        }
       
    }
   
    const newEvent = {
        name, 
        price,
        location,
        nameArena,
        date,
        id_eventPhoto:photoEvent.public_id,
        eventPhoto:photoEvent.secure_url
    }
    
   try {
    const newEvents = await Event.create(newEvent);
    newEvents.addArtist(id_Artist)

    
    return newEvents;
   } catch (error) {
    console.log(error)
   }
    
   
};

module.exports = postEventController;