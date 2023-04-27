const updateEvent = require("../../Controllers/eventController/updateEventController");



const updateEventHandler = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
console.log("//el id y el body", id, body);
    try {
        const updaEvent = await updateEvent (id, body);
        res.status(200).json(updaEvent);
    } catch (error) {
        res.status(400).json({ error: "Can't update" })
    }
}

module.exports = updateEventHandler;