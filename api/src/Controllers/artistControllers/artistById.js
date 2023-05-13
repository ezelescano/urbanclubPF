const { ACTIVATED, DELETED } = require("../../constants");
const {Artist, Event, Follow} = require("../../db")

const artistById = async (artistId) => {

    if (!artistId) {
      throw new Error("No se especificó el ID del usuario");
    } else {
      const infoArtistDB = await Artist.findOne({
        where: {id: artistId},
        include: [
          { model: Event },
          { model: Follow, as: 'follower' },
          { model: Follow, as: 'following' }
        ]
      });
      if (!infoArtistDB) {
        throw new Error("No se encontró ningún usuario con ese ID")
      } else {
        if (infoArtistDB.estado === DELETED)
          throw new Error("No se encontró ningún usuario con ese ID")
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
          events: infoArtistDB.Events,
          followers: infoArtistDB.follower,
          followings: infoArtistDB.following
        };
        //console.log(infoArtistDB)
        return infoArtistClean;
      }
  
    }
    // const dataDB = await Recipe.findOne({
    //   where: {id: id},
    //   include: {
    //     model: Diets,
    //     attributes: ['name']
    //   }
    // })
  };
module.exports = {artistById};