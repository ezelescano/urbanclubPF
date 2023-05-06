const postConversation = require("../../Controllers/conversationController/postConversation")

const postConvHandler = async(req, res) => {
  try {
    const members = [ req.body.senderId, req.body.receiverId ];
    const conversation = await postConversation(members);
    return res.status(200).json(conversation)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = postConvHandler;