const { delLogArtist } = require("../../Controllers/artistControllers/delLogArtist");
  
  const delLogArtistHandler = async (req, res) => {
  
    const { id } = req.params;
    //const { body } = req; //modificar estado del artista a 'deleted"
    console.log(id);
    //console.log(body);
    try {
      const deletedArtist = await delLogArtist(id);
      return res.status(200).json(deletedArtist);
    } catch (error){
      return res.status(400).json({ message: error.message });
    }
  
  //   console.log(body);
  //   return res
  //     .status(200)
  //     .send(`Esta es la ruta para actualizar los datos del artista con id ${id}`);
  };
  
  module.exports = { delLogArtistHandler };