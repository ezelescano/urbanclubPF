
const { getArtistByName, getAllArtist } = require("../../Controllers/artistControllers/getAllArtist");


const getArtistHandler = async (req, res) => {
    const {name} = req.query;
    if(name) {
        try {
            const oneArtist = await getArtistByName(name);
            res.status(200).json(oneArtist); 
        } catch (error) {
            res.status(400).json({error: "Server not response"})
        }
    }else{
        try {
            const result = await getAllArtist();
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({error: "Server not response"});
            
        }
    }
}

module.exports = {
    getArtistHandler,
}