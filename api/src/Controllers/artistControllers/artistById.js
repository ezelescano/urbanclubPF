const { EM_NO_USER_ID } = require("../../../utils/messages");
const { ACTIVATED, DELETED } = require("../../constants");
const {Artist} = require("../../db")

const artistById = async (artistId) => {

    if (!artistId) {
      throw new Error("No se especificó el ID del usuario");
    } else {
      const infoArtistDB = await Artist.findByPk(artistId);
      if (!infoArtistDB) {
        throw new Error(EM_NO_USER_ID)
      } else {
        if (infoArtistDB.estado === DELETED)
          throw new Error(EM_NO_USER_ID)
        const infoArtistClean = {
          id: infoArtistDB.id,
          nickname: infoArtistDB.nickName,
          name: infoArtistDB.name,
          lastname: infoArtistDB.lastname,
          email: infoArtistDB.email,
          profilePhoto: infoArtistDB.profilePhoto,
          coverPhoto: infoArtistDB.coverPhoto,
          Country: infoArtistDB.Country,
          city: infoArtistDB.city,
          ocupation: infoArtistDB.ocupation,
          aboutMe: infoArtistDB.aboutMe,
        };
  
        return infoArtistClean;
      }
  
    }
  
  };
module.exports = {artistById};