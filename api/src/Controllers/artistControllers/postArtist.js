const { Op } = require("sequelize");
const {Artist} = require("../../db");
const postArtist = async (req) => {
    const {
        name,lastname,email,password,nickName,
        profilePhoto,coverPhoto,Country,city,
        ocupation,aboutMe,} = req.body;
        //?el name se agrega con mayuscula
    const Nombre = name.toUpperCase();

   if (!name || !lastname || !email || !nickName) 
     return {error:"Debe llenar todos los campos"};
    
     //? validacion de correo electronico
     const valueEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(!valueEmail.test(email)){
        return {error:"el correo no es correcto"}
    }
  /** 
  *?  validacion password del password
  *? - Minimo 8 caracteres
  *? - Maximo 15
  *? - Al menos una letra mayúscula
  *? - Al menos una letra minucula
  *? - Al menos un numero
  *? - No espacios en blanco
  *? - Al menos 1 caracter especial  */
  const valeuPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (!valeuPassword.test(password)) {
    return {error:`el password debe contener
    - Minimo 8 caracteres
    - Maximo 15
    - Al menos una letra mayúscula
    - Al menos una letra minucula
    - Al menos un numero
    - No espacios en blanco
    - Al menos 1 caracter especial
    `}
    }
    //? se busca el nick en la base de datos
    const searchNick = await Artist.findOne({
     where:{ nickName:nickName }
    })
    searchEmail = await Artist.findOne({
        where:{ email:email }
    })
    //? si existe el nickName devuelve el error
    if (searchNick) {
        return {error:"El NickName ya esta en uso"}
    }
    //? si existe el correo devuelve el error
    if (searchEmail) {
        return {error:"El Correo ya esta en uso"}
    }
   try {
    const newArtist = {
        name:Nombre,
        lastname,
        email,
        profilePhoto,
        coverPhoto,
        nickName,
        Country,
        city,
        ocupation,
        aboutMe,
        password
    }
  const crea = await Artist.create(newArtist)


    return newArtist
   } catch (error) {
    throw new Error(error)
   }
}
module.exports = {postArtist}