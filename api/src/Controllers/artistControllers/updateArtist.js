const {
  cloudiconfig,
  loadPhoto,
  DeletePhoto,
} = require("../../../utils/cloudinary");
const { Artist } = require("../../db");
const { DELETED, ACTIVATED } = require("../../constants");
const bcrypt = require("bcrypt");

const updateArtist = async (req) => {
  const { id } = req.params;
  let { body } = req;

  let actualizados = {};
  if (!id) {
    throw new Error("No se especificó el ID del usuario");
  } else {
    body.id = parseInt(id);

    const artist = await Artist.findOne({
      where: { id },
    });
    if (!artist) throw new Error("No se encontró ningún usuario con ese ID");
    if (artist.estado === DELETED)
      throw new Error("No se encontró ningún usuario con ese ID");
      console.log(body.password, artist.estado, artist.password)
      if(body.password && artist.estado === ACTIVATED){
      console.log("dentro del if", body.password, artist.estado, artist.password)

        const valeuPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
        if (!valeuPassword.test(body.password)) {
          throw new Error("Contraseña incorrecta");
        }
        body.password = await bcrypt.hash(body.password, 8);
        console.log(body.password);
      }
    if (req.files && artist.estado === ACTIVATED) {
      const { profilePhoto, coverPhoto } = req.files;
      cloudiconfig();
      if (profilePhoto) {
        if (artist.id_profilePhoto) await DeletePhoto(artist.id_profilePhoto);
        const UpdateProfile = await loadPhoto(profilePhoto.tempFilePath);
        body.id_profilePhoto = UpdateProfile.public_id;
        body.profilePhoto = UpdateProfile.secure_url;
      } else {
        body.id_profilePhoto = artist.id_profilePhoto;
        body.profilePhoto = artist.profilePhoto;
      }

      if (coverPhoto) {
        if (artist.id_coverPhoto) await DeletePhoto(artist.id_coverPhoto);
        const UpdateCover = await loadPhoto(coverPhoto.tempFilePath);
        body.id_coverPhoto = UpdateCover.public_id;
        body.coverPhoto = UpdateCover.secure_url;
      } else {
        body.id_coverPhoto = artist.id_coverPhoto;
        body.coverPhoto = artist.coverPhoto;
      }
    } else {
      body.id_coverPhoto = artist.id_coverPhoto;
      body.coverPhoto = artist.coverPhoto;
      body.id_profilePhoto = artist.id_profilePhoto;
      body.profilePhoto = artist.profilePhoto;
    }
    await Artist.update(body, { where: { id: parseInt(id) } });
  }
  return body;
};

module.exports = { updateArtist };
