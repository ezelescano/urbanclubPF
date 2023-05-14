const getFollowers = require("../../Controllers/artistControllers/getFollowers");

const getFollowersHandler = async function (req, res) {
  const { id } = req.params;
  try {
    const found = await getFollowers(id)
    res.status(200).send(found);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = getFollowersHandler;