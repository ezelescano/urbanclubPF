const { Event, EventComment } = require("../../db");

const postComment = async (eventComment) => {
  const { writer, comment, id_event } = eventComment;
  try {
    const newComment = await EventComment.create({
      writer,
      comment,
    });
    const event = await Event.findByPk({ where: { id: id_event } });
    event.addEventComment(newComment);
    return newComment;
  } catch (error) {
    return error;
  }
};

module.exports = postComment;
