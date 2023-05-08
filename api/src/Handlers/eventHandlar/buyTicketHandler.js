const buyTicketController = require("../../Controllers/eventController/buyTicketController");

const buyTicketHandler = async (req, res) => {
    
    try {
        const event = await buyTicketController(req);
        return res.status(200).json(event);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = buyTicketHandler;