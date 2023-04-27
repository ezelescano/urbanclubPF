const {postEventController} = require("../../Controllers/eventController");

const postEventHandler = async (req, res) => {
    const result = await postEventController(req);
    return res.status(200).json(result);
};

module.exports = postEventHandler;