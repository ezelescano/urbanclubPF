const { Message } = require("../../db");

const getMessage = async(convId) => {
  try {
    const messageFound = await Message.findAll({
      where: { conversationId: convId }
    })

    return messageFound;
  } catch (err) {
    return err
  }
}

module.exports = getMessage;