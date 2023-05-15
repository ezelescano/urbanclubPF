const { Artist, Follow } = require("../../db"); 

const getFollowers = async(id) => {
  try {
    const user = await Artist.findByPk(id, {
      include: { model: Follow, as: 'follower' }
    });
    //console.log(user.following)
    const friends = await Promise.all(
      user.follower.map(async(f) => {
        const userFound = await Artist.findByPk(f.follower_Id);
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

module.exports = getFollowers;