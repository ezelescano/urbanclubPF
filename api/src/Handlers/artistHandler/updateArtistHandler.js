const {
  updateArtist,
} = require("../../Controllers/artistControllers/updateArtist");

const updateArtistHandler = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedArtist = await updateArtist(id, body);
    return res.status(200).json(updatedArtist);
  } catch (error){
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { updateArtistHandler };
