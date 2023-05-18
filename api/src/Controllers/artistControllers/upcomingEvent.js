const { Artist, Event } = require("../../db");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { PASSWORD_EMAIL, EMAIL_ADDRES } = process.env;
const cron = require("node-cron");
const { Op } = require('sequelize');


const upcomingEvent = async () => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(futureDate.getDate() + 3);

    const eventComming = await Event.findAll({
        where: {
            date: {
                [Op.between]: [today, futureDate]
            }
        },
        attributes: ["name", "id_Artist", "eventPhoto"]
    });

    if (eventComming) {
        const artistDB = await Artist.findAll({ attributes: ["email"] })
        const config = {
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: EMAIL_ADDRES,
                pass: PASSWORD_EMAIL
            }
        }
        for (const artist of artistDB) {
            const mensaje = {
                from: EMAIL_ADDRES,
                to: artist.email,
                subject: "Próximos Eventos!!",
                html: `
                <div style="background-color: black; padding: 10px 20px; text-align: center;">
                    <img src="https://media.discordapp.net/attachments/1097579150350487605/1105670284289249330/our_logo-removebg-preview.png" alt="urbanClub! Logo" style="max-width: 400px;">
                </div>
                <title>No te pierdas los Mejores Eventos!!</title>
                </head>
                <body style="font-family: sans-serif; font-size: 16px;">
                <p style="font-size: 16px;">¡No te quedes fuera! Solo quedan 3 días para el evento. Prepárate para un momento lleno de música y diversión. ¡Te esperamos!</p>
                <p style="font-size: 20px; font-weight: bold; text-align: center; margin-top: 20px;">¡Descubre los próximos eventos de urbanClub!</p>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${eventComming.slice(0, 3).map(event => `
                    <li style="margin-top: 20px;">
                      <img src="${event.eventPhoto}" alt="${event.name}" style="max-width: 300px; display: block; margin: 0 auto; border-radius: 10px;">
                      <span style="display: block; font-size: 18px; font-weight: bold; text-align: center; margin-top: 10px;">${event.name}</span>
                    </li>
                  `).join('')}
                </ul>
                <p style="font-size: 16px; text-align: center; margin-top: 20px;">¡No te quedes sin disfrutar de la mejor música y ambiente!</p>
                <p style="font-size: 16px; text-align: center;">Atentamente,</p>
                <p style="font-size: 16px; text-align: center;">El equipo de urbanClub</p>
              </body>`
            }
            const transport = nodemailer.createTransport(config);

            const info = await transport.sendMail(mensaje);

        }

    }
}


cron.schedule('0 12  * * *', () => {
    upcomingEvent();
})
