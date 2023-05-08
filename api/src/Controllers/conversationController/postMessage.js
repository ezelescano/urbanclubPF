const { Message, Conversation } = require("../../db");

const postMessage = async( conversationId, sender, text ) => {
  try {
   
    const newMessage = await Message.create({
      conversationId,
      sender,
      text
    })

    const conversation = await Conversation.findByPk(conversationId);
    if (!conversation) {
      throw new Error("conversacion no encontrada");
    }

    await newMessage.setConversation(conversation);
    
    return newMessage
  } catch (err) {
    return err
  }
};

module.exports = postMessage;