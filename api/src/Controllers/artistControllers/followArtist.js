const { Artist } = require("../../db"); 

const followArtist = async(followerId, followedId, isfollow) => {
  console.log(followerId, followedId, isfollow)
  try {
    if(isfollow === "follow"){
      const follower = await Artist.findByPk(followerId);
  
      await follower.update({
        followings: [...follower.followings, followedId]
      });
  
      const followed = await Artist.findByPk(followedId);
  
      await followed.update({
        followers: [...follower.followers, followerId]
      });

      return "Follow"
    }
    const follower = await Artist.findByPk(followerId);
  
      await follower.update({
        followings: follower.followings.filter(f => f === followedId)
      });
  
      const followed = await Artist.findByPk(followedId);
  
      await followed.update({
        followers: followed.followers.filter(f => f === followerId)
      });

      return "UnFollow"
  } catch (error) {
    return error
  }
};

module.exports = followArtist;


