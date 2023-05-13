const { Follow } = require("../../db");

const unfollowArtist = async ( userId, followedId ) => {
  console.log(userId, followedId);
    try {
      const follow = await Follow.findOne({
        where: {
          follower_Id: userId,
          following_Id: followedId
        }
      });
      if (!follow) {
        throw new Error('No estás siguiendo a este artista');
      }
  
      await follow.destroy();
      return'Dejaste de seguir al artista';
  } catch (error) {
    return error;
  }
};

module.exports = unfollowArtist;