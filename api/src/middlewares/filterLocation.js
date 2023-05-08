const filterLocation = (req, res, next) => {
    const {ubicacion} = req.query;
    
    // Verificar si la ubicación existe
    if (ubicacion) {
      req.ubicacion = ubicacion;
    }
    
    next();
  };
  module.exports = {filterLocation}