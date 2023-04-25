const {Artist} = require("../../db");

const getAllArtist = async () => {
    const artistDB = await Artist.find({
        attributes: ["id", "name", "lastname", "email", "profilePhoto", "coverPhoto", "password", "nickName", "Country", "city", "ocupation","aboutMe"]
    })
    return artistDB; 
}

const getArtistByName = async (name) => {

}

module.exports = {
    getAllArtist, 
    getArtistByName
}