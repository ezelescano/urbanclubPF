const filterDate = (req, res, next) => {
    const {date} = req.query
    console.log("hola soy el date")
    if (date) {
      console.log("me guarde en el req")
      req.date = date;
      // if (subcategoria) {
      //   req.subcategoria = subcategoria;
      // }
    }
    next();
  };

module.exports = {filterDate}