const getArtistInfo = require("../../Controllers/artistControllers/getArtistInfo")

const authLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const response = await getArtistInfo(email, password)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = authLogin