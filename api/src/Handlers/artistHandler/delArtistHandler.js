const { delArtist } = require("../../Controllers/artistControllers/delArtist");

const delArtistHandler = async function (req,res){
    const { id } = req.params;
    try {
      const deleted = await delArtist(id);
      //res.status(200).send("Artist " + id + " is deleted");
       res.status(200).send(deleted);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {delArtistHandler}