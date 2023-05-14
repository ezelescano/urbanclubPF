const {postEventController} = require("../../Controllers/eventController");

const postEventHandler = async (req, res) => {
    try {
        const result = await postEventController(req);
      
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
    
};

module.exports = postEventHandler;