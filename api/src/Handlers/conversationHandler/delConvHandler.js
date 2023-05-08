const delConversation = require("../../Controllers/conversationController/delConversation");

const delConvHandler = async(req, res) => {
  try {
    const { id } = req.params;
    const conversation = await delConversation(id)
    return res.status(200).json(conversation)
  } catch (err) {
    console.log(err);
    console.log(err.stack);
    return res.status(500).send(err);
  }
}

module.exports = delConvHandler;
