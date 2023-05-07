const { Event } = require("../../db");
const { Artist } = require("../../db");
const nodemailer = require("nodemailer")

const buyTicketController = async (id, stock) => {
    if (!id) {
        throw new Error("Not specific Id");
    } else {
        const eventActualized = await Event.update({stock: stock}, {where: {id: id}})
        const event = await Event.findAll({ where: {id: id}, 
            include: {
                model: Artist,
                attributes: [
                  "id",
                  "name",
                  "email"
                ],
                through: {
                  attributes: [],
                },
              },
        })
        // console.log(event)

        const artistEmail = event[0].Artists[0].email;

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
            to: artistEmail,
            subject: "Compra de ticket",
            html: `<body>
            <h1>Confirmación de compra de entrada para ${event[0].name}</h1>
            
            <p>Estimado ${event[0].Artists[0].name},</p>
            
            <p>¡Gracias por tu compra de entrada para el evento ${event[0].name}! Nos complace informarte que tu compra ha sido exitosa y tu entrada está reservada.</p>
            
            <h3>Detalles de la compra:</h3>
            <ul>
              <li>Nombre del evento: ${event[0].name}</li>
              <li>Fecha: ${event[0].date}</li>
              <li>Total pagado: ${event[0].price}</li>
            </ul>
            
            <p>Por favor, asegúrate de llevar contigo una copia de este correo electrónico y tu identificación al evento. El personal de entrada estará allí para asistirte y darte acceso al evento.</p>
            
            <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos a través de este correo electrónico</p>
            
            <p>¡Esperamos que disfrutes del evento y gracias por tu apoyo!</p>
            
            <p>Atentamente,<br>
            urbanClub!<br>
            Equipo de Soporte al Cliente</p>
            
          </body>`
        }
        const transport = nodemailer.createTransport(config);

        const info = await transport.sendMail(mensaje);

        console.log(info);

        
        return eventActualized;
    }
};

module.exports = buyTicketController;