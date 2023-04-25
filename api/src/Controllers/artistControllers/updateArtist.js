const { Artist } = require("../../db");

const updateArtist = async (userId, body) => {
  if (!userId) {
    throw new Error("No se especificó el ID del usuario");
  } else {
    const artist = await Artist.findByPk(userId);
    if (!artist) throw new Error("No se encontró ningún usuario con ese ID");
    const updatedArtist = await Artist.update({id: userId}, body);
    return updatedArtist;
  } 
};

module.exports = { updateArtist };
