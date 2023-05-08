const getConversation = require("../../Controllers/conversationController/getConversation")

const getConvHandler = async(req, res) => {
 try {
  const { userId } = req.params;
  const conversation = await getConversation(userId);
  return res.status(200).json(conversation)
 } catch (err) {
  return res.status(500).json(err)
 }
}

module.exports = getConvHandler;