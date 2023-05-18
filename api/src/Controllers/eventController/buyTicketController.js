const { Event, Artist } = require("../../db");
require("dotenv").config();
const { PASSWORD_EMAIL,EMAIL_ADDRES } = process.env;
const nodemailer = require("nodemailer");

const buyTicketController = async (req) => {
  const { id } = req.params;
  const { stock, id_Artist, totalPayment } = req.body;
  console.log(totalPayment)

  if (!id) {
    throw new Error("Not specific Id");
  } else {

    const eventActualized = await Event.update(
      { stock: stock },
      { where: { id: id } }
    );
    const comprador = await Artist.findOne({
      where: { id: id_Artist },
    });
    const event = await Event.findOne({
      where: { id },
    });

    const emailComprador = comprador.email;

    const vendedor = await Artist.findOne({ where: { id: event.id_Artist } })
    const vendedorMail = vendedor.email;

    const config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: EMAIL_ADDRES,
        pass: PASSWORD_EMAIL
      },
    };
    const mensajeCompra = {
      from: EMAIL_ADDRES,
      to: emailComprador,
      subject: "Compra de ticket",
      html: `
            <div style="background-color: black; padding: 10px 20px; text-align: center;">
                <img src="https://media.discordapp.net/attachments/1097579150350487605/1105670284289249330/our_logo-removebg-preview.png" alt="urbanClub! Logo" style="max-width: 400px;">
            </div>
            <div style="background-color: #f5f5f5; padding: 20px; font-family: Arial, sans-serif;">
              <div style="background-color: #ffffff; padding: 20px;">
                <title>Confirmación de compra de entrada para ${event.name}</title>
                  <body>
                    <p>Estimado ${comprador.name},</p>
                    <p>¡Gracias por tu compra de entrada para el evento ${event.name}! Nos complace informarte que tu compra ha sido exitosa y tu entrada está reservada.</p>
                    <h3>Detalles de la compra:</h3>
                    <ul>
                      <li>Nombre del evento: ${event.name}</li>
                      <li>Fecha: ${event.date}</li>
                      <li>Total pagado: ${totalPayment} USD</li>
                    </ul>
            
                    <p>Por favor, asegúrate de llevar contigo una copia de este correo electrónico y tu identificación al evento. El personal de entrada estará allí para asistirte y darte acceso al evento.</p>
            
                    <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos a través de este correo electrónico</p>
            
                    <p>¡Esperamos que disfrutes del evento y gracias por tu apoyo!</p>
            
                    <p>Atentamente,
                    <br>urbanClub!<br>
                    Equipo de Soporte al Cliente</p>
              </div>
            </div>   
          </body>`,
    };

    const mensajeVenta = {
      from: EMAIL_ADDRES,
      to: vendedorMail,
      subject: "Compra de ticket",
      html: `
      <div style="background-color: black; padding: 10px 20px; text-align: center;">
                <img src="https://media.discordapp.net/attachments/1097579150350487605/1105670284289249330/our_logo-removebg-preview.png" alt="urbanClub! Logo" style="max-width: 400px;">
            </div>
      <head>
      <title>Venta de entrada confirmada</title>
  </head>
  <body>
      <div style="background-color: #f5f5f5; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background-color: #ffffff; padding: 20px;">
              <h1 style="color: #333333;">¡Venta de entrada confirmada!</h1>
              <p>Estimado ${vendedor.name},</p>
              <p>Te informamos que se ha vendido una entrada para tu evento en urbanClub. ¡Felicidades!</p>
              <p>Detalles de la venta:</p>
              <ul>
                  <li>Evento: ${event.name}</li>
                  <li>Fecha: ${event.date}</li>
                  <li>Número de entradas restantes: ${event.stock}</li>
              </ul>
              <p>¡Esperamos que tu evento sea un gran éxito y que disfrutes de una increíble experiencia artística!</p>
              <p>Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nuestro equipo de soporte a través de <a href="${EMAIL_ADDRES}">${EMAIL_ADDRES}</a>.</p>
              <p>¡Te deseamos mucho éxito en tu evento!</p>
              <p>Saludos cordiales,</p>
              <p>El equipo de urbanClub!</p>
          </div>
      </div>
  </body>`,
    };

    const transport = await nodemailer.createTransport(config);

    const compra = await transport.sendMail(mensajeCompra);
    const venta = await transport.sendMail(mensajeVenta);

    return eventActualized;
  }
};

module.exports = buyTicketController;
