const { restoreArtist } = require("../../Controllers/artistControllers/restoreArtist");
  
  const restoreArtistHandler = async (req, res) => {
  
    const { id } = req.params;
    //const { body } = req; //modificar estado del artista a 'ACTIVED"
   
    try {
      const restoredArtist = await restoreArtist(id);
      return res.status(200).json(restoredArtist);
    } catch (error){
      return res.status(400).json({ message: error.message });
    }
  
  };
  
  module.exports = { restoreArtistHandler };