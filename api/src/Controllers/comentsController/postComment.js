const { Event, EventComment } = require("../../db");

const postComment = async (writer, comment, rating, id_event) => {
  try {
    const newComment = await EventComment.create({
      writer,
      comment,
      rating
    });
    const event = await Event.findByPk(id_event);
    if (!event){
      throw new Error("Evento no encontrado");
    }
    await event.addEventComment(newComment, { foreignKey: 'eventId' });
    return newComment;
  } catch (error) {
    return error;
  }
};

module.exports = postComment;
