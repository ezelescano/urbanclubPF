const {artistById} = require("../../Controllers/artistControllers")


const getArtistById = async function (req, res) {
    const { id } = req.params;
    try {
      const found = await artistById(id);
      res.status(200).send(found);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports= {
    getArtistById,
}