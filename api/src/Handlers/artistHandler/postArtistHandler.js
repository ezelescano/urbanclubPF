const { postArtist } = require("../../Controllers/artistControllers")

const postArtistHandler = async (req,res) =>{
    try {
        const result = await postArtist(req)
        res.json(result)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error:error.message})
    }
}
module.exports = {postArtistHandler}
