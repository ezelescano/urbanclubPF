const getAllComments = require("../../Controllers/comentsController/getAllComments");

const getAllComentsHandler = async (req, res) => {
    const {id_event} = req.body
    try {
        const comments = await getAllComments(id_event);
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(400).json({error: "No comments founds in database"})
    }
};

module.exports = getAllComentsHandler;