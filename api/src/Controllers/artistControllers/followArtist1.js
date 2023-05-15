const { Artist, Follow } = require("../../db");

const followArtist1 = async (userId, followedId) => {
  try {
    const artist = await Artist.findByPk(userId);
    if (!artist) {
      throw new Error('Artista no encontrado');
    }
    // verificamos si ya existe un registro de seguimiento
    const existingFollow = await Follow.findOne({
      where: {
        follower_Id: userId,
        following_Id: followedId,
      },
    });
    if (existingFollow) {
      return 'El artista ya está siendo seguido';
    }
    // creamos un nuevo registro de seguimiento
    const follow = await Follow.create({
      follower_Id: userId,
      following_Id: followedId,
    });
    return 'Artista seguido correctamente';
  } catch (error) {
    console.log("Error al seguir al artista:", error);
    return error;
  }
};

module.exports = followArtist1;