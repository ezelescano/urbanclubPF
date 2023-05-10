const {
  updateArtist,
} = require("../../Controllers/artistControllers/updateArtist");

const updateArtistHandler = async (req, res) => {
  
  try {
    const updatedArtist = await updateArtist(req);
    return res.status(200).json(updatedArtist);
  } catch (error){
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { updateArtistHandler };
