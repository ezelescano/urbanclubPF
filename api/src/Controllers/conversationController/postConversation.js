const { Artist, Conversation } = require("../../db");

const postConversation = async(members) => {
  try {
    const newConversation = await Conversation.create({
      members: members
    });

    const artists = await Artist.findAll({ where: { id: members } });
    await Promise.all(artists.map(artist => artist.addConversation(newConversation)));

    return newConversation;
    
  } catch (err) {
    return err;
  }
};

module.exports = postConversation;