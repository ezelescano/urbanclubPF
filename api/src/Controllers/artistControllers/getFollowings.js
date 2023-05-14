const { Artist, Follow } = require("../../db"); 

const getFollowings = async(id) => {
  try {
    const user = await Artist.findByPk(id, {
      include: { model: Follow, as: 'following' }
    });
    //console.log(user.following)
    const friends = await Promise.all(
      user.following.map(async(f) => {
        const userFound = await Artist.findByPk(f.following_Id);
        return {
          id: userFound.id,
          profilePhoto: userFound.profilePhoto,
          name: userFound.name,
        };
      })
    );
   
    return friends;
  } catch (error) {
    return error;
  }
};

module.exports = getFollowings;