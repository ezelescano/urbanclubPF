const buyTicketController = require("../../Controllers/eventController/buyTicketController");

const buyTicketHandler = async (req, res) => {
    const { id } = req.params;
    const { stock } =req.body;
    try {
        const event = await buyTicketController(id, stock);
        return res.status(200).json(event);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = buyTicketHandler;