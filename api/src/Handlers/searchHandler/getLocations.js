const { getLocations } = require("../../../utils/locations");



const getSavedLocations = async function (req, res) {
    try {
        res.status(200).send(await getLocations());
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getSavedLocations,
}