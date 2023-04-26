const { Op } = require("sequelize");
const { Artist } = require("../../db");

const getAllArtist = async () => {
    const artistDB = await Artist?.findAll({
        attributes: ["name", "lastname", "nickName", "ocupation"]
    })
    return artistDB;
}

const getArtistByName = async (name) => {
    const nameSplit = name.split(" ");
    const finalWords = [];
    for(let i = 0; i < nameSplit.length; i++){
      const word = nameSplit[i];
      const firstLetter = word.charAt(0).toUpperCase();
      const restLetters = word.slice(1).toLowerCase();
      const finalWord = firstLetter + restLetters;
      finalWords.push(finalWord);
    }
    const finalString = finalWords.join(" ");
    console.log("//soy el finalstring", finalString);
    const dataBaseByName = await Artist.findAll({ 
    where: {
    [Op.or]: [
        { name: { [Op.iLike]: `%${finalString}%` } },
        { nickName: { [Op.iLike]: `%${finalString}%` } },
        { lastname: {[Op.iLike]: `%${finalString}%`}
        }  
    ]
    },
    
     });
     return dataBaseByName;
}




module.exports = {
    getAllArtist,
    getArtistByName
}


