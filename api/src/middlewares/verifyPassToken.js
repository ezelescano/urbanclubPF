require('dotenv').config();
const {JWT_SECRET} = process.env;
const jwt = require("jsonwebtoken")

const verifyPassToken = (req, res, next) => {
    const {token} = req.query;
    
    // Verificar si la ubicación existe
    if (!token) {
        // return res.redirect('/forgot-password');
        req.send("regresa a olvidaste la contraseña")
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.exp < Date.now()) {
        //   return res.redirect('/forgot-password');
        res.send("regresa a olvidaste tu contraseña")
        }
    
        // Si el token es válido y no ha expirado, puedes pasar algún dato adicional al siguiente middleware o ruta, si es necesario
        req.userId = decoded.userId; // ver que info viene del token
    
        // Llama al siguiente middleware o ruta
        next();
      } catch (err) {
        // Si el token es inválido o ha ocurrido algún error, redirige al usuario a la página de solicitud de recuperación de contraseña
        // return res.redirect('/forgot-password');
        res.send('regresa a olvidaste tu contraseña');
      }
    
    next();
  };
  module.exports = verifyPassToken