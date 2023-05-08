const {detailEventsControler} = require("../../Controllers/eventController")
const EventsDetailHandler = async (req,res) => {
try {
    const result = await detailEventsControler(req)
    return res.status(200).json(result);
} catch (error) {
    return res.status(400).json({error});
}
}

module.exports = EventsDetailHandler;