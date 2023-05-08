const postMessage = require("../../Controllers/conversationController/postMessage");


const postMsgHandler = async (req, res) => {
  try {
    const { conversationId, sender, text } = req.body;
    const message = await postMessage(conversationId, sender, text);
    return res.status(200).json(message);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = postMsgHandler;