const { Artist } = require("../../db");
const { ACTIVATED } = require("../../constants")

const restoreArtist = async (userId) => {
  if (!userId) {
    throw new Error("No se especificó el ID del artista");
  } else {
    const artist = await Artist.findByPk(userId);
    if (!artist) throw new Error("No se encontró ningún artistas con ese ID");
    
    if (artist.estado===ACTIVATED) throw new Error("El artista ya estaba activado");

    await Artist.update( {estado:ACTIVATED}, {where: {id: parseInt(userId)}});
  }
  return "Artista restaurado correctamente";
};

module.exports = { restoreArtist };