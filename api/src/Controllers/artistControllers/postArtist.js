// const { Op, json } = require("sequelize");
const { Artist } = require("../../db");
const fileupload = require("express-fileupload")
const fs_extra = require("fs-extra")
const bcrypt = require("bcrypt")
const cloudinary = require("cloudinary").v2
require("dotenv").config();

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

const postArtist = async (req) => {

    let {
        name, lastname, email, password, nickName, Country, city,
        ocupation, aboutMe, } = req.body;

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
            error: `el password debe contener
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
        where: { nickName: nickName }
    })
    const searchEmail = await Artist.findOne({
        where: { email: email }
    })
    console.log("probando", searchEmail);
    //? si existe el nickName devuelve el error
    if (searchNick) {
        return { error: "El NickName ya esta en uso" }
    }
    //? si existe el correo devuelve el error
    if (searchEmail) {
        return { error: "El Correo ya esta en uso" }
    }

    let saveProfile = {}, saveCover = {}

    if (req.files) {
        const { profilePhoto, coverPhoto } = req.files

        if (profilePhoto) {
            cloudiconfig()
            saveProfile = await loadPhoto(profilePhoto.tempFilePath);
        }

        if (coverPhoto) {
            cloudiconfig()
            saveCover = await loadPhoto(coverPhoto.tempFilePath);
        }
    }
    
    password = await bcrypt.hash(password, 8);
  
    try {
        let newArtist = {
            name: Nombre,
            lastname,
            email,
            id_profilePhoto: saveProfile.public_id,
            profilePhoto: saveProfile.secure_url,
            id_coverPhoto: saveCover.public_id,
            coverPhoto: saveCover.secure_url,
            nickName,
            Country,
            city,
            ocupation,
            aboutMe,
            password
        }
        const create = await Artist.create(newArtist)
        return create
        
    } catch (error) {
        throw new Error(error)
    }
}

const cloudiconfig = () => {
    cloudinary.config({
        cloud_name: CLOUD_NAME,
        api_key: API_KEY,
        api_secret: API_SECRET,
        secure: true
    });
}
const loadPhoto = async (path) => {
    savePhoto = await cloudinary.uploader.upload(path, {
        folder: "UrbanClub"
    });

    await fs_extra.unlink(path)
    return savePhoto;
}
module.exports = { postArtist }