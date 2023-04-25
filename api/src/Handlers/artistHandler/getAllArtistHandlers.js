const { getAllArtist } = require("../../Controllers/artistControllers/getAllArtist")


const getAllArtistHandler = async (req, res) => {
    const result = getAllArtist();
    res.status(200).send(result)
}

module.exports= {
    getAllArtistHandler,
}