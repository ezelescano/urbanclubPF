const getFollowings = require("../../Controllers/artistControllers/getFollowings");

const getFollowingsHandler = async function (req, res) {
    const { id } = req.params;
    try {
      const found = await getFollowings(id)
      res.status(200).send(found);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports = getFollowingsHandler;