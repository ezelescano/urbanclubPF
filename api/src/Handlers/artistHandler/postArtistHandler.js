const { postArtist } = require("../../Controllers/artistControllers")

const postArtistHandler = async (req,res) =>{
   
    const result = await postArtist(req)
    res.json(result)
}
module.exports = {postArtistHandler}
