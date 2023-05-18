const { Artist } = require("../../db");
const nodemailer = require("nodemailer");
require("dotenv").config();
const {URL_FRONT} = require("../../env")
const { PASSWORD_EMAIL,EMAIL_ADDRES, JWT_SECRET} = process.env;
const jwt = require("jsonwebtoken");

const forgotPassword = async (email) => {
    
    if (!email){
        throw new Error("No se especificó el email");
    } else {

        const artist = await Artist.findOne({where: {email: email}});
        const token = jwt.sign({userId: artist.id}, JWT_SECRET, {expiresIn: "5m"})
     
        if (!artist){
            throw new Error("No se encontró el artista en la base de datos");
        }

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
            to: email,
            subject: "Recuperación de contraseña",
            html: `
            <div style="background-color: black; padding: 10px 20px; text-align: center;">
                <img src="https://media.discordapp.net/attachments/1097579150350487605/1105670284289249330/our_logo-removebg-preview.png" alt="urbanClub! Logo" style="max-width: 400px;">
            </div>
            <title>Recuperación de contraseña</title>
            </head>
            <body>
                <h2>Recuperación de contraseña</h2>
            
                <p>Estimado ${artist.name},</p>
            
                <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta en nuestro sitio web. Para proceder con la recuperación de tu contraseña, por favor sigue los pasos a continuación:</p>
            
                <ol>
                    <li>Haz clic en el siguiente enlace para acceder a la página de restablecimiento de contraseña: <a href="${URL_FRONT}/newPassword/${artist.id}/${token}">Enlace único de restablecimiento de contraseña</a></li>
                    <li>Serás redirigido a una página donde podrás crear una nueva contraseña. Asegúrate de elegir una contraseña segura y fácil de recordar.</li>
                    <li>Una vez que hayas creado tu nueva contraseña, podrás acceder nuevamente a tu cuenta con las nuevas credenciales.</li>
                </ol>
                <p>Este link dura 5 minutos.</p>
                <p>Si no solicitaste este cambio o no deseas restablecer tu contraseña, te recomendamos tomar las siguientes medidas de seguridad:</p>
                <ul>
                    <li>No hagas clic en el enlace proporcionado anteriormente.</li>
                    <li>Cambia tu contraseña actual lo antes posible en la configuración de tu cuenta.</li>
                    <li>Mantén tu cuenta segura utilizando contraseñas fuertes y únicas, evitando compartirlas con otras personas.</li>
                </ul>
            
                <p>¡Gracias por tu atención y continuo apoyo!</p>
            
                <p>Atentamente,</p>
                <p>urbanClub!</p>
                <p>Equipo de Soporte Técnico</p>
            </body>`
        }
        const transport = nodemailer.createTransport(config);

        const info = await transport.sendMail(mensaje);

    }
}

module.exports = {forgotPassword}