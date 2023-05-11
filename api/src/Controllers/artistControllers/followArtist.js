const { Artist } = require("../../db"); 

const followArtist = async(followerId, followedId, isfollow) => {
  console.log(followerId, followedId, isfollow)
  try {
    if(isfollow === "follow"){
      const follower = await Artist.findByPk(followerId);
  
      await follower.update({
        followers: [...follower.followers, followedId]
      });
  
      const followed = await Artist.findByPk(followedId);
  
      await followed.update({
        followings: [...follower.followings, followerId]
      });

      return "Follow"
    }
    const follower = await Artist.findByPk(followerId);
  
      await follower.update({
        followers: follower.followers.filter(f => f === followedId)
      });
  
      const followed = await Artist.findByPk(followedId);
  
      await followed.update({
        followings: followed.followings.filter(f => f === followerId)
      });

      return "UnFollow"
  } catch (error) {
    return error
  }
};

module.exports = followArtist;


