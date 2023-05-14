const { cloudiconfig,loadPhoto } = require("../../../utils/cloudinary");
const {Event,Artist} = require("../../db");

const postEventController = async (req) => {
    const { name, price, location, nameArena, date,
    stock, Country,city,Description, id_Artist} = req.body;
    let photoEvent = {}
    if (req.files) {
        const {eventPhoto} = req.files
        cloudiconfig()
        if (eventPhoto)  {
            photoEvent = await loadPhoto(eventPhoto.tempFilePath,"events",id_Artist);
            
        }
       
    }
   
    const newEvent = {
        stock,
        id_Artist,
        name, 
        price,
        location,
        nameArena,
        date,
        city,
        Country,
        Description,
        id_eventPhoto:photoEvent.public_id,
        eventPhoto:photoEvent.secure_url,
    }
   
    
   try {
    const newEvents = await Event.create(newEvent);
    // newEvents.addArtist(id_Artist)
    const ArtistEvent = await Artist.findByPk(id_Artist)
    ArtistEvent.addEvent(newEvents);

    return newEvents;
   } catch (error) {
    console.log(error)
   }
    
   
};

module.exports = postEventController;