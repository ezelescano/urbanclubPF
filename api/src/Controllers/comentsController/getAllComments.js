const { Event, EventComment } = require("../../db")

const getAllComments = async() => {
    const comment = await Event.findAll({
        include: EventComment
    })
};

module.exports = getAllComments;