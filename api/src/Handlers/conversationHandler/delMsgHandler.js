const delMessage = require("../../Controllers/conversationController/delMessage");


const delMsgHandler = async(req, res) => {
  try {
    const { id } = req.params;
    const Message = await delMessage(id)
    return res.status(200).json(Message)
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = delMsgHandler;