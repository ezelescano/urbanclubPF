const deleteEvent = require("../../Controllers/eventController/delEventController");


const delEventHandler = async (req, res) => {
    const { id } = req.params;
    try {
            const result = await deleteEvent(id);
            res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the user' });

    }
}

module.exports= delEventHandler;