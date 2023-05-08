const delConversation = require("../../Controllers/conversationController/delConversation");

const delCovHandler = async(res, req) => {
  try {
    const { convId } = req.params;
    const conversation = await delConversation(convId)
    return res.status(200).json(conversation)
  } catch (err) {
    //return res.status(500).send(err);
  }
}

module.exports = delCovHandler;
