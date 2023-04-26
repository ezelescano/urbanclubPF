const { Sequelize } = require("sequelize");
const { Artist } = require("../../db");

const getAllArtist = async () => {
    const artistDB = await Artist?.findAll({
        attributes: ["id", "name", "lastname", "email", "profilePhoto", "coverPhoto", "password", "nickName", "Country", "city", "ocupation", "aboutMe"]
    })
    return artistDB;
}

const getArtistByName = async (name) => {
    const nameSplit = name?.split(" ");

    if (nameSplit.length > 0) {
        const lowerWords = await nameSplit.map(word => word?.toLowerCase());
        const finalString = lowerWords.join(" ");
        const artists = await Artist?.findAll({
            where: {
                [Sequelize.Op.or]: [
                    Sequelize.literal(`lower(concat(name, ' ', lastname)) like '%${finalString}%'`),
                    { nickname: { [Sequelize.Op.iLike]: `%${finalString}%` } }
                ]
            }
        }
        );
        console.log("///soy artist", artists);
        return artists;
    } else{
     const   artist = await Artist.findAll({
        where :{name: name }
    }) 
    return artist;
    }


}




module.exports = {
    getAllArtist,
    getArtistByName
}


