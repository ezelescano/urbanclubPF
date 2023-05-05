const { Artist } = require("../../db");
const nodemailer = require("nodemailer");

const forgotPassword = async (email) => {
    console.log(email)
    if (!email){
        throw new Error("No se especificó el email");
    } else {
        const artist = await Artist.findOne({where: {email: email}});
        console.log(artist, artist.id);
        if (!artist){
            throw new Error("No se encontró el artista en la base de datos");
        }

        const config = {
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "urbanclub55@gmail.com",
                pass: 'vmgtifhevjajyyaw'
            }
        }

        const mensaje = {
            from: "urbanclub55@gmail.com",
            to: email,
            subject: "Recuperación de contraseña",
            html: `<p>Para cambiar la contraseña, hacé click en el siguiente link</p>
            <a href="http://localhost:3000/updatePassword/${artist.id}">Recupera tu clave</a>`
        }
        const transport = nodemailer.createTransport(config);

        const info = await transport.sendMail(mensaje);

        console.log(info);
    }
}

module.exports = {forgotPassword}