const {Artist} = require("../../db")
const {cloudiconfig,DeletePhoto} = require("../../../utils/cloudinary")

const delArtist = async (userId) => {
   try {
    console.log(userId)
    if (!userId) {
      throw new Error("No se especificó el ID del usuario");
    } else {
      const artist = await Artist.findOne({ where: { id: userId } })
     if (artist) {
      let nickName = ""
      nickName = artist.nickName
      if (artist.id_profilePhoto) {
        console.log("elimino profile")
        cloudiconfig();
        DeletePhoto(artist.id_profilePhoto)
      }
      if (artist.id_coverPhoto) {
        console.log("elimino cover")

        cloudiconfig();
        DeletePhoto(artist.id_coverPhoto)
      }
      await Artist.destroy({ where: { id: userId } });
      return `Se elimino el usuario ${nickName}`
     }else{
      throw new Error("No se encontró ningún usuario con ese ID")
     }
  // const artist = await Artist.destroy({ where: { id: id } });
  // res.send("Artist is deleted");
}
   } catch (error) {
    throw new Error(error)
   }
};

  module.exports = {delArtist};