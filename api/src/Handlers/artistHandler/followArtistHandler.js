const followArtist = require("../../Controllers/artistControllers/FollowArtist");


const followArtistHandler = async(req, res) => {
  try {
   const { followerId, follow } = req.params;
   const { followedId } = req.body;
   const response = await followArtist( followerId, followedId, follow);
   return res.status(200).json(response)
  } catch (err) {
   return res.status(500).json(err)
  }
 }
 
 module.exports = followArtistHandler;