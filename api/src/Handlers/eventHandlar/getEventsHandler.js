const {getEventsController} = require("../../Controllers/eventController");

const getEventsHandler = async (req, res) => {
    try {
        const result = await getEventsController();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({error: "Server not response"});
    }
};

module.exports = getEventsHandler;