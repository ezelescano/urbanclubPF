const generateJWT = require("../../../utils/generateJWT")
const bcrypt = require("bcrypt")
const {Artist} = require("../../db");
const { ACTIVATED } = require("../../constants");

const getArtistInfo = async (email, password) => {
  console.log(email)
    const artist = await Artist.findOne({
        where: {
          email,
          estado:ACTIVATED
        }
      })
      
      if (!artist) {
          throw new Error('No existe ningún usuario con este correo')
        }   
        //?usamos este metodos pars compars encriptaciones la password encriptada de bd con la password encriptada de login y asi evitar que se exponga la contraseña
        const comparePassword = bcrypt.compareSync(password, artist.password);
        if (comparePassword) {
            const datos = {
            //     id : artist.id,
            //     name : artist.name,
            //     lastname : artist.lastname,
            //     email : artist.email,
                token : generateJWT(artist.id,artist.name,artist.profilePhoto),
                // estado: ACTIVATED //se agrega para funcionar borrado logico no comparar si esta DELETED
            }
            //!aqui podemos agregar informacion a la que qisieramos acceder
           
            return datos

      } else {
        throw new Error("datos incorrectos")
    }
};

module.exports = getArtistInfo