const followArtist1 = require("../../Controllers/artistControllers/followArtist1");


const followArtistHandler1 = async(req, res) => {
  try {
    const { userId } = req.params;
    const { followedId } = req.body;
    const response = await followArtist1( userId, followedId );
   return res.status(200).json(response)
  } catch (err) {
   return res.status(500).json(err)
  }
 }
 
 module.exports = followArtistHandler1;