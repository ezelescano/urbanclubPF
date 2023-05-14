const { Event, EventComment } = require("../../db");

const getAllComments = async (id_event) => {
  const event = await Event.findOne({
    where: { id: id_event },
    include: { model: EventComment, as: 'eventComment' } 
  });

  return event.eventComment; 
};

module.exports = getAllComments;