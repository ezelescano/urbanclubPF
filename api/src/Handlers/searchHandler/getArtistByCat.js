const {artistByCat} = require("../../Controllers/artistControllers")


const getArtistByCat = async function (req, res) {
    //? infomracion viene del front
    const { category } = req.params;
    try {
      const found = await artistByCat(category);
      res.status(200).send(found);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports= {
    getArtistByCat,
}