const filterEvents = (req, res, next) => {
    const { events } = req.query

    if (events) {
        req.events = events;
        // if (subcategoria) {
        //   req.subcategoria = subcategoria;
        // }
    }
    next();
};

module.exports = { filterEvents }