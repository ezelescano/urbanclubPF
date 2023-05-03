// const { Op, json } = require("sequelize");
const { Artist } = require("../../db");
const bcrypt = require("bcrypt")
const { cloudiconfig, loadPhoto } = require("../../../utils/cloudinary")
const getArtistInfo = require("./getArtistInfo")


const postArtist = async (req) => {

    let {
        name, lastname, email, password, nickName, Country, city,
        ocupation, aboutMe } = req.body;
    if (!name || !lastname || !email || !nickName)
        return { error: "Debe llenar todos los campos" };

    //?el name se agrega con mayuscula
    const Nombre = name.toUpperCase();

    //? validacion de correo electronico
    const valueEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!valueEmail.test(email)) {
        return { error: "el correo no es correcto" }
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
        return {
            error: "Contraseña incorrecta"}
    }

    //? se busca el nick en la base de datos
    const searchNick = await Artist.findOne({
        where: { nickName: nickName }
    })
    const searchEmail = await Artist.findOne({
        where: { email: email }
    })
    //? si existe el nickName devuelve el error
    if (searchNick) {
        return { error: "El NickName ya esta en uso" }
    }
    //? si existe el correo devuelve el error
    if (searchEmail) {
        return { error: "El Correo ya esta en uso" }
    }

    let saveProfile = {},
     saveCover = {}
    if (req.files) {
        const { profilePhoto, coverPhoto } = req.files
        cloudiconfig()
        if (profilePhoto) {
            
            saveProfile = await loadPhoto(profilePhoto.tempFilePath);
        }

        if (coverPhoto) {
            // cloudiconfig()
            saveCover = await loadPhoto(coverPhoto.tempFilePath);
        } 
    }
    
    passwordcrypt = await bcrypt.hash(password, 8);
    try {
        let newArtist = {
            name: Nombre,
            lastname,
            email,
            id_profilePhoto: saveProfile.public_id ,
            profilePhoto: saveProfile.secure_url,
            id_coverPhoto: saveCover.public_id,
            coverPhoto: saveCover.secure_url,
            nickName,
            Country,
            city,
            ocupation,
            aboutMe,
            password:passwordcrypt
        }
        await Artist.create(newArtist)
        const getall = getArtistInfo(newArtist.email,password)
        return (getall)
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = { postArtist }