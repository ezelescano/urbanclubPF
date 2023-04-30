const { cloudiconfig,loadPhoto,DeletePhoto } = require("../../../utils/cloudinary");
const { Artist } = require("../../db");
const { DELETED } = require("../../constants");

const updateArtist = async (req) => {
  const { id } = req.params;
  const { body } = req;
  
  let actualizados = {}
  if (!id) {
    throw new Error("No se especificó el ID del usuario");
  } else {
    //  const artist = await Artist.findByPk(id);
   
    const artist = await Artist.findOne({
      where :{id}
    });
    if (req.files) {
      const { profilePhoto, coverPhoto } = req.files

      if (profilePhoto) {
          cloudiconfig()
          console.log(artist.id_profilePhoto)
          return artist.id_profilePhoto
          if (artist.id_profilePhoto)  await DeletePhoto(artist.id_profilePhoto);
          const UpdateProfile = await loadPhoto(profilePhoto.tempFilePath);
          body.id_profilePhoto = UpdateProfile.public_id
          body.id_profilePhoto = UpdateProfile.secure_url
      }

      if (coverPhoto) {
          cloudiconfig()
          if (artist.id_coverPhoto) await DeletePhoto(artist.id_coverPhoto);
          const UpdateCover = await loadPhoto(coverPhoto.tempFilePath);
          body.id_coverPhoto = UpdateCover.public_id
    body.coverPhoto = UpdateCover.secure_url
      }
  }
    
    console.log(body)
  return artist
    if (!artist) throw new Error("No se encontró ningún usuario con ese ID");
    if (artist.estado===DELETED) throw new Error("No se encontró ningún usuario con ese ID");
    
    await Artist.update(body, { where: { id: parseInt(id) } });

  }
  return "Datos actualizados correctamente";
  return actualizados
};

module.exports = { updateArtist };
