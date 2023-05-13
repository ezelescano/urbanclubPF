const { Artist } = require("../../db");
const bcrypt = require("bcrypt");

const newPasswordController = async (id, password) => {
  if (!id) {
    throw new Error("No se especificó el ID del usuario");
  } else {
    const artist = await Artist.findOne({ where: { id: id } });
    if (!artist) {
      throw new Error("No se encontró ningún usuario con ese ID");
    }
    const valeuPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (!valeuPassword.test(password)) {
      throw new Error("Contraseña incorrecta");
    }
    password = await bcrypt.hash(password, 8);
    const updatedArtist = await Artist.update(
      { password: password },
      { where: { id: id } }
    );
  }
  return "Contraseña actualizada"
};

module.exports = newPasswordController;
