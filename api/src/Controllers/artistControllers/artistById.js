const {Artist} = require("../../db")

const artistById = async (userId) => {

    if (!userId) {
      throw new Error("No se especificó el ID del usuario");
    } else {
      const infoUserDB = await Artist.findByPk(userId);
      if (!infoUserDB) {
        throw new Error("No se encontró ningún usuario con ese ID")
      } else {
        
        const infoUserClean = {
          id: infoUserDB.id,
          nickname: infoUserDB.nickname,
          name: infoUserDB.name,
          lastname: infoUserDB.lastname,
          email: infoUserDB.email,
          profilePhoto: infoUserDB.profilePhoto,
          coverPhoto: infoUserDB.coverPhoto,
          Country: infoUserDB.Country,
          city: infoUserDB.city,
          ocupation: infoUserDB.ocupation,
          aboutMe: infoUserDB.aboutMe,
        };
  
        return infoUserClean;
      }
  
    }
  
  };
module.exports = {artistById};