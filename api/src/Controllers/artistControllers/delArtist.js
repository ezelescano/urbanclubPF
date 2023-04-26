const {Artist} = require("../../db")

const delArtist = async (userId) => {
    if (!userId) {
        throw new Error("No se especificó el ID del usuario");
      } else {
        const infoUserDB = await Artist.destroy({ where: { id: userId } });
        if (!infoUserDB) {
          throw new Error("No se encontró ningún usuario con ese ID")
        }
    // const artist = await Artist.destroy({ where: { id: id } });
    // res.send("Artist is deleted");
  }
};

  module.exports = {delArtist};