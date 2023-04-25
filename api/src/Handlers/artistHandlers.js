const { getAllArtist } = require("../Controllers/artistControllers")


const getArtistHandler = async (req, res) => {
    const result = getAllArtist();
    res.status(200).send(result)
}

module.exports= {
    getArtistHandler,
}