require('dotenv').config();
const {JWT_SECRET} = process.env;
const jwt = require("jsonwebtoken")

const verifyPassToken = (req, res, next) => {
    const { token } = req.params;
  console.log(token)
    if (!token) {
      // Si no se proporciona el token, envía una respuesta de error
      return res.status(400).json({ message: 'Token no proporcionado' });
    }
  
    try {
      
      const decoded = jwt.verify(token, JWT_SECRET);
      
      
      if (decoded.exp * 1000 < Date.now()) {
        // Si el token ha expirado, envía una respuesta de error
        return res.status(400).json({ message: 'El token ha expirado' });
      }
  
      req.userId = decoded.userId; // Asigna el userId al objeto req para usarlo en el controlador
  
      // Llama al siguiente middleware o ruta
      next();
    } catch (err) {
      // Si el token es inválido o ha ocurrido algún error, envía una respuesta de error
      return res.status(400).json({ message: 'Token inválido' });
    }
  };
  module.exports = verifyPassToken