const { Message } = require("../../db");

const getMessage = async(convId) => {
  try {
    console.log(convId)
    const messageFound = await Message.findAll({
      where: { conversationId: convId }
    })
    console.log(messageFound + "aqui estoyyy")

    return messageFound;
  } catch (err) {
    return err
  }
}

module.exports = getMessage;