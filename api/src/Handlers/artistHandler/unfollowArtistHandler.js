const unfollowArtist = require("../../Controllers/artistControllers/unfollowArtist");



const unfollowArtistHandler = async(req, res) => {
  try {
    const { userId } = req.params;
    const { followedId } = req.body;
    const response = await unfollowArtist( userId, followedId );
   return res.status(200).json(response)
  } catch (err) {
   return res.status(500).json(err)
  }
 }
 
 module.exports = unfollowArtistHandler;