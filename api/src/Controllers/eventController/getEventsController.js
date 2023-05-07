const {Event,Artist} = require("../../db");

const getEventsController = async () => {
    const eventDB = await Event.findAll({
        include: {
            model: Artist,
            attributes: [
              "id",
              "name",
              "lastname",
              "email",
              "id_profilePhoto",
              "estado",
              "profilePhoto",
              "id_coverPhoto",
              "coverPhoto",
              "nickName",
              "Country",
              "ocupation",
              "aboutMe"
            ],
            through: {
              attributes: [],
            },
          },
    })
    return eventDB;
};

module.exports = getEventsController;