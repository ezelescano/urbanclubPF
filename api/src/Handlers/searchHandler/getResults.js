const {Artist} = require("../../db")
const { Op } = require('sequelize');
const { ACTIVATED } = require("../../constants");

// const {artistByCat} = require("../../Controllers/artistControllers")
const categories = require("../../../utils/categories")
const {getAllArtist} = require("../../Controllers/artistControllers/getAllArtist")


const getResults = async (req, res) => {
    const categoria = req.categoria;
    const subcategoria = req.subcategoria;
    const ubicacion = req.ubicacion;

    
    
    // Lógica para filtrar artistas basados en categoría, subcategoría y/o ubicación
    let artistasFiltrados = await getAllArtist();    
  
    if (categoria) {
        console.log('entramos a un if??!!!!');
        artistasFiltrados = artistasFiltrados.filter(artista => artista.ocupation.includes(categoria));
    }
  
    // if (subcategoria) {
    //   artistasFiltrados = artistasFiltrados.filter(producto => producto.subcategoria === subcategoria);
    // }
  
    if (ubicacion) {
      artistasFiltrados = artistasFiltrados.filter(artista => artista.Country === ubicacion);
    }
  
    res.json({ artistas: artistasFiltrados });
  };;

module.exports= {
    getResults,
}