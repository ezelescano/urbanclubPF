const { cloudiconfig, loadPhoto, DeletePhoto } = require("../../../utils/cloudinary");
const { Artist } = require("../../db");
const { DELETED, ACTIVATED } = require("../../constants");

const updateArtist = async (req) => {
  const { id } = req.params;
  const { body } = req;
  let actualizados = {}
  if (!id) {
    throw new Error("No se especificó el ID del usuario");
  } else {
    //  const artist = await Artist.findByPk(id);

    const artist = await Artist.findOne({
      where: { id }
    });
    if (!artist) throw new Error("No se encontró ningún usuario con ese ID");
    if (artist.estado === DELETED) throw new Error("No se encontró ningún usuario con ese ID");
    if (req.files && artist.estado === ACTIVATED) {
      const { profilePhoto, coverPhoto } = req.files
      cloudiconfig()
      if (profilePhoto) {

        if (artist.id_profilePhoto) await DeletePhoto(artist.id_profilePhoto);
        const UpdateProfile = await loadPhoto(profilePhoto.tempFilePath);
        body.id_profilePhoto = UpdateProfile.public_id
        body.profilePhoto = UpdateProfile.secure_url
      } else {
        // cloudiconfig()
        if (artist.id_profilePhoto) await DeletePhoto(artist.id_profilePhoto);
        body.id_profilePhoto = ""
        body.profilePhoto = "https://res.cloudinary.com/draxxv99e/image/upload/v1682710836/defaulr_urbanclub/profilePhoto_r6vbif.png"
      }

      if (coverPhoto) {
        // cloudiconfig()
        if (artist.id_coverPhoto) await DeletePhoto(artist.id_coverPhoto);
        const UpdateCover = await loadPhoto(coverPhoto.tempFilePath);
        body.id_coverPhoto = UpdateCover.public_id
        body.coverPhoto = UpdateCover.secure_url
      } else {
        // cloudiconfig()
        if (artist.id_coverPhoto) await DeletePhoto(artist.id_coverPhoto);
        body.id_coverPhoto = ""
        body.coverPhoto = "https://res.cloudinary.com/draxxv99e/image/upload/v1682710844/defaulr_urbanclub/coverPhoto_rmh1lj.png"
      }
    } else {
      if (artist.id_profilePhoto) await DeletePhoto(artist.id_profilePhoto);
      if (artist.id_coverPhoto) await DeletePhoto(artist.id_coverPhoto);
      body.id_profilePhoto = ""
      body.profilePhoto = "https://res.cloudinary.com/draxxv99e/image/upload/v1682710836/defaulr_urbanclub/profilePhoto_r6vbif.png"
      body.id_coverPhoto = ""
      body.coverPhoto = "https://res.cloudinary.com/draxxv99e/image/upload/v1682710844/defaulr_urbanclub/coverPhoto_rmh1lj.png"
    }
    await Artist.update(body, { where: { id: parseInt(id) } });

  }
  // return "Datos actualizados correctamente";
  return body
};

module.exports = { updateArtist };
