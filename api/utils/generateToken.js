const generateToken = () => {
    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32)
    return random + fecha;
    
    //! el valor de este token debe agregarse a las propiedades del Modelo de usuario(artista), para hacer la validacion de registro.
}
module.exports = generateToken