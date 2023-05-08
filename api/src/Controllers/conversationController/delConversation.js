const { Conversation } = require("../../db");

const delConversation = async(convId) => {
  console.log(convId)
  try {
    const conversationDel = await Conversation.destroy({ where: { id: convId } })
    
    return "Ha elimina la conversacion";
  } catch (err) {
    return err
  }
}

module.exports = delConversation;