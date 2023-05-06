const filterCategories = (req, res, next) => {
    const {categoria, subcategoria} = req.query
    
    if (categoria) {
      req.categoria = categoria;
      // if (subcategoria) {
      //   req.subcategoria = subcategoria;
      // }
    }
    next();
  };

module.exports = {filterCategories}