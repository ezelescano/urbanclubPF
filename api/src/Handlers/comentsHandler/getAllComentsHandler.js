const getAllComments = require("../../Controllers/comentsController/getAllComments");

const getAllComentsHandler = async (req, res) => {
    const {idEvent} = req.params;
    try {
        const comments = await getAllComments(idEvent);
        if(!comments) {
            return res.status(400).json({error: "No comments founds for this event"})
        }
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(400).json({error: "No comments founds in database"})
    }
};

module.exports = getAllComentsHandler;