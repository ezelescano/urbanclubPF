// const { Op, json } = require("sequelize");
const { Artist } = require("../../db");
const bcrypt = require("bcrypt")
const { cloudiconfig, loadPhoto } = require("../../../utils/cloudinary")
const getArtistInfo = require("./getArtistInfo")
const { PASSWORD_EMAIL,EMAIL_ADDRES} = process.env;
const nodemailer = require("nodemailer")



const postArtist = async (req) => {

    let {
        name, lastname, email, password, nickName, Country, city,
        ocupation,subCategory, aboutMe } = req.body;
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
            
            saveProfile = await loadPhoto(profilePhoto.tempFilePath,"Artist",nickName);
        }

        if (coverPhoto) {
            // cloudiconfig()
            saveCover = await loadPhoto(coverPhoto.tempFilePath,"Artist",nickName);
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
            subCategory,
            aboutMe,
            password:passwordcrypt
        }
        await Artist.create(newArtist)

        const config = {
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: EMAIL_ADDRES,
                pass: PASSWORD_EMAIL
            }
        }

        const mensaje = {
            from: EMAIL_ADDRES,
            to: newArtist.email,
            subject: "Bienvenido a urbanClub!",
            html: `
            <div style="background-color: black; padding: 10px 20px; text-align: center;">
                <img src="https://media.discordapp.net/attachments/1097579150350487605/1105670284289249330/our_logo-removebg-preview.png" alt="urbanClub! Logo" style="max-width: 400px;">
            </div>
            <head>
            <title>Bienvenido a urbanClub!</title>
        </head>
        <body>
            
            <div style="background-color: #f5f5f5; padding: 20px; font-family: Arial, sans-serif;">
                <div style="background-color: #ffffff; padding: 20px;">
                    <h1 style="color: #333333;">¡Bienvenido a urbanClub!</h1>
                    <p>Estimado ${newArtist.name},</p>
                    <p>¡Bienvenido a urbanClub!</p>
                     <p>Nos complace darte la bienvenida a nuestra plataforma diseñada especialmente para artistas como tú, que buscan vender y promocionar sus eventos de una manera sencilla y efectiva.</p>
                    <p>En urbanClub entendemos la importancia de crear conexiones significativas entre artistas y su público. Nuestra plataforma ofrece una amplia gama de características y herramientas para ayudarte a alcanzar tus metas y maximizar el alcance de tus eventos.</p>
                    <p>Aquí hay algunas características destacadas de urbanClub:</p>
                    <ol>
                        <li>Perfil de artista personalizado: Crea un perfil único que destaque tu talento, experiencias anteriores y muestra tu estilo artístico de manera atractiva.</li>
                        <li>Calendario de eventos: Mantén a tus seguidores actualizados sobre tus próximos eventos y fechas de presentaciones.</li>
                        <li>Sistema de venta de entradas: Simplifica el proceso de venta de entradas a través de nuestra plataforma segura y confiable, permitiendo a tus seguidores adquirir boletos fácilmente.</li>
                        <li>Comunidad de artistas: Conecta con otros artistas, compartiendo conocimientos y experiencias para crecer juntos en la industria.</li>
                    </ol>
                    <p>Estamos emocionados de tenerte a bordo y esperamos verte prosperar en urbanClub. Si tienes alguna pregunta, no dudes en ponerte en contacto con nuestro equipo de soporte a través de <a href="${EMAIL_ADDRES}">${EMAIL_ADDRES}</a>. Estaremos encantados de ayudarte en cualquier momento.</p>
                    <p>Una vez más, bienvenido a urbanClub. Estamos ansiosos por ver cómo tus eventos se convierten en un gran éxito en nuestra plataforma. ¡Juntos, haremos vibrar las calles!</p>
                    <p>Saludos cordiales,</p>
                    <p>El equipo de urbanClub!</p>
                </div>
            </div>
        </body>`
        }
        const transport = nodemailer.createTransport(config);

        const info = await transport.sendMail(mensaje);
        const getall = getArtistInfo(newArtist.email,password)
        return (getall)
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = { postArtist }