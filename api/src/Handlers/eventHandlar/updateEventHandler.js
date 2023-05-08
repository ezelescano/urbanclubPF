const updateEvent = require("../../Controllers/eventController/updateEventController");



const updateEventHandler = async (req, res) => {
    try {
        const updaEvent = await updateEvent (req);
        res.status(200).json(updaEvent);
    } catch (error) {
        
        res.status(400).json({error})
    }
}

module.exports = updateEventHandler;