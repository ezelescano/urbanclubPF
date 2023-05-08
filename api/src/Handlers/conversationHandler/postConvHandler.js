const postConversation = require("../../Controllers/conversationController/postConversation")

const postConvHandler = async(req, res) => {
  try {
    const members = [ req.params.firstUserId, req.params.secondUserId];
   
    const conversation = await postConversation(members);

    return res.status(200).json(conversation)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = postConvHandler;