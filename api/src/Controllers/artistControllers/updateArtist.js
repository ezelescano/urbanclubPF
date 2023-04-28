const { Artist } = require("../../db");
const { DELETED } = require("../../constants");

const updateArtist = async (userId, body) => {
  let actualizados = {}
  if (!userId) {
    throw new Error("No se especificó el ID del usuario");
  } else {
    const artist = await Artist.findByPk(userId);

    if (!artist) throw new Error("No se encontró ningún usuario con ese ID");
    if (artist.estado===DELETED) throw new Error("No se encontró ningún usuario con ese ID");
    
    await Artist.update(body, { where: { id: parseInt(userId) } });

  }
  return "Datos actualizados correctamente";
  return actualizados
};

module.exports = { updateArtist };
