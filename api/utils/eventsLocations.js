const { Event } = require("../src/db");

const eventsLocations = (async (req, res) => {
    const locations = await Event.findAll({
        attributes: ["Country"]
    });
    const arrayLocations = []
    locations?.map(location => arrayLocations.push(location.Country))

    const notRepet = [...new Set(arrayLocations)];
    return notRepet;
});



module.exports = {
    eventsLocations,
}