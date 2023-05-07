const {Artist} = require("../../db")
const { Op } = require('sequelize');
const { ACTIVATED } = require("../../constants");


const artistByCat = async (category) => {
    try {
        const dataBaseByName = await Artist.findAll({ 
            where: {
                estado : ACTIVATED,
                ocupation: {
                    [Op.like]: `%${category}%`
                  }
            }
        });
        if (dataBaseByName.length === 0) {
            throw new Error();
          }
         return dataBaseByName;
    } catch (error) {
        throw new Error("No se encontraron artistas en esa categoría")
    }

  
  };
module.exports = {artistByCat};