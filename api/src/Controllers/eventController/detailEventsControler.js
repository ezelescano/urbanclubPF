const {Event,Artist} = require("../../db");

const detailEventsControler = async (req) => {
const {id} = req.params;
const result =  await Event.findOne({where:{id}})
return result
}

module.exports = detailEventsControler;