const { Artist } = require("../src/db");

const getLocations = (async (req, res) => {
    const locations = await Artist.findAll({
        attributes: ["Country"]
    });
    const arrayLocations = []
    locations?.map(location => arrayLocations.push(location.Country))

    const notRepet = [...new Set(arrayLocations)];
    return notRepet;
});



module.exports = {
    getLocations,
}