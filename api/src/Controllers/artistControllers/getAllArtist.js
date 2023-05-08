const { Op } = require("sequelize");
const { Artist,Event } = require("../../db");
const { ACTIVATED } = require("../../constants");

const getAllArtist = async () => {
    const artistDB = await Artist?.findAll({ where: { estado: ACTIVATED},include: Event})
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
    const dataBaseByName = await Artist.findAll({ 
    where: {
        estado: ACTIVATED,   //se agrega para funcionar borrado logico no obtener si esta DELETED

    [Op.or]: [
        { name: { [Op.iLike]: `%${finalString}%` } },
        { nickName: { [Op.iLike]: `%${finalString}%` } },
        { lastname: {[Op.iLike]: `%${finalString}%`}},
    ]
    },
    
     });
     return dataBaseByName;
}




module.exports = {
    getAllArtist,
    getArtistByName
}


