const { postArtis } = require("../../Controllers/artistControllers")

const postArtistHandler = async (req,res) =>{
   
    const result = await postArtis(req)
    res.json(result)
}
module.exports = {postArtistHandler}
