const { Artist } = require("../../db");
const {DELETED} = require("../../constants")

const delLogArtist = async (userId) => {
  if (!userId) {
    throw new Error("No se especificó el ID del artista");
  } else {
    const artist = await Artist.findByPk(userId);
    if (!artist) throw new Error("No se encontró ningún artistas con ese ID");

    if (artist.estado===DELETED) throw new Error("No se encontró ningún usuario con ese ID");

    await Artist.update( {estado:DELETED}, {where: {id: parseInt(userId)}});
  }
  return "Artista borrado correctamente";
};

module.exports = { delLogArtist };