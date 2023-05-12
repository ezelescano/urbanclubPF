const getAllComments = require("../../Controllers/comentsController/getAllComments");

const getAllComentsHandler = async (req, res) => {
    try {
        const comments = await getAllComents();
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(400).json({error: "No comments founds in database"})
    }
};

module.exports = getAllComentsHandler;