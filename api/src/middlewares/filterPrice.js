const filterPrice = (req, res, next) => {
    const {price} = req.query
    if (price) {
      req.price = price;
    }
    next();
  };

module.exports = {filterPrice}