const { Op } = require("sequelize");
const { Conversation } = require("../../db");

const getConversation = async(userId) => {
  try {
    const conversationFound = await Conversation.findAll({
      where: {
        members: {
          [Op.contains]: [userId]
        }
      }
    })
    
    return conversationFound.reverse();
  } catch (err) {
    return err
  }
}

module.exports = getConversation;