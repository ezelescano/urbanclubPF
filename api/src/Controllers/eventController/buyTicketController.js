const { Event,Artist } = require("../../db");
require("dotenv").config();
const { PASSWORD_EMAIL} = process.env;
const nodemailer = require("nodemailer");

const buyTicketController = async (req) => {
  const { id } = req.params;
    const { stock,id_Artist } =req.body;

   
   


  if (!id) {
    throw new Error("Not specific Id");
  } else {
    const eventActualized = await Event.update(
      { stock: stock },
      { where: { id: id } }
    );
    const artist = await Artist.findOne({
      where: { id: id_Artist },
    });
   const event = await Event.findOne({
    where: {id}
   })

    const artistEmail = artist.email;

    const config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "urbanclub948@gmail.com",
        pass: PASSWORD_EMAIL,
      },
    };
    const mensaje = {
      from: "urbanclub948@gmail.com",
      to: artistEmail,
      subject: "Compra de ticket",
      html: `<body>
            <h1>Confirmación de compra de entrada para ${event.name}</h1>
            
            <p>Estimado ${artist.name},</p>
            
            <p>¡Gracias por tu compra de entrada para el evento ${event.name}! Nos complace informarte que tu compra ha sido exitosa y tu entrada está reservada.</p>
            
            <h3>Detalles de la compra:</h3>
            <ul>
              <li>Nombre del evento: ${event.name}</li>
              <li>Fecha: ${event.date}</li>
              <li>Total pagado: ${event.price}</li>
            </ul>
            
            <p>Por favor, asegúrate de llevar contigo una copia de este correo electrónico y tu identificación al evento. El personal de entrada estará allí para asistirte y darte acceso al evento.</p>
            
            <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos a través de este correo electrónico</p>
            
            <p>¡Esperamos que disfrutes del evento y gracias por tu apoyo!</p>
            
            <p>Atentamente,<br>
            urbanClub!<br>
            Equipo de Soporte al Cliente</p>
            
          </body>`,
    };

    const transport = await nodemailer.createTransport(config);
    
    const info = await transport.sendMail(mensaje);

    return eventActualized;
  }
};

module.exports = buyTicketController;
