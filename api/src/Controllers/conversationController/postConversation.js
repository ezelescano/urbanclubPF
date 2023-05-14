const { Artist, Conversation } = require("../../db");
const { Op } = require("sequelize");

const postConversation = async(members) => {
  try {
    
    const conversationFound = await Conversation.findOne({
      where: {
        members: {
          [Op.contains]: members
        }
      }
    })

    

    if(!conversationFound){
      
      const newConversation = await Conversation.create({
         members: members
       });
   
       const artists = await Artist.findAll({ where: { id: members } });
       await Promise.all(artists.map(artist => artist.addConversation(newConversation)));
   
       return newConversation;
      }

      return conversationFound;

  } catch (err) {
    return err;
  }
};

module.exports = postConversation;