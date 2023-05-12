const filterDate = (req, res, next) => {
    const {date} = req.query
    if (date) {
      req.date = date;
      // if (subcategoria) {
      //   req.subcategoria = subcategoria;
      // }
    }
    next();
  };

module.exports = {filterDate}