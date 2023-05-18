const {Artist} = require("../db")
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {artistById} = require("../Controllers/artistControllers/artistById")
const generateJWT = require("../../utils/generateJWT")
const {URL_BACK} = require("../env")
require("dotenv").config();
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
  PASSWORD_EMAIL,EMAIL_ADDRES} = process.env;
passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `${URL_BACK}/artist/auth/google/callback`,
      // callbackURL: "https://pruebaback-production-0050.up.railway.app/artist/auth/google/callback",
      session:false,
      scope: ['profile', 'email'],
      passReqToCallback: true
  },
  async (req, accessToken, refreshToken, profile, done) => {
    const newArtist = await Artist.findOne({
        where: {
          email : profile._json.email,
      }
    })

  if(newArtist) {
          const artist = await artistById(newArtist.id)
          // artist.token =  generateJWT(artist.id, artist.name)
          artist.token = generateJWT(artist.id, artist.name,artist.profilePhoto)
          done(null,artist)
    } else {

      const artistByGoogle = await Artist.create({

          name : profile.name.givenName,
          lastname: profile.name.familyName,
          email : profile._json.email,
          nickName: profile.name.familyName.substring(0,3) + profile.name.givenName.substring(0,3) + Math.floor(Math.random() * 1000),
          password: '',
          profilePhoto : profile._json.picture
    })
     artistByGoogle.dataValues.token = generateJWT(artistByGoogle.id,artistByGoogle.name, artistByGoogle.profilePhoto)
     sendemail(artistByGoogle.dataValues)
      done(null, artistByGoogle.dataValues)

    }
  }
));


passport.serializeUser((artist, done) => {
  done(null, artist.id);
});

passport.deserializeUser(async (id, done) => {
    const artist = await Artist.findByPk(id).catch((err) => {
      done(err, null)
    });
    if(artist) done(null, artist);
});
const sendemail = async(newArtist) =>{
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
  
  
  }

module.exports = passport