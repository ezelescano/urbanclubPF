const { cloudiconfig,loadPhoto } = require("../../../utils/cloudinary");
const {Event,Artist} = require("../../db");

const postEventController = async (req) => {
    const { name, price, location, nameArena, date,id_Artist, stock} = req.body;
    console.log(name, price);
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
        id_Artist,
        name, 
        price,
        location,
        nameArena,
        date,
        id_eventPhoto:photoEvent.public_id,
        eventPhoto:photoEvent.secure_url,
        stock,
    }
    console.log("primer log", newEvent)
    
   try {
    const newEvents = await Event.create(newEvent);
    newEvents.addArtist(id_Artist);

    return newEvents;
   } catch (error) {
    console.log(error)
   }
    
   
};

module.exports = postEventController;