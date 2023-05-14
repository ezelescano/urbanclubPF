const { eventsLocations } = require("../../../utils/eventsLocations");



const getEventsLocations = async function (req, res) {
    try {
        res.status(200).send(await eventsLocations());
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getEventsLocations,
}