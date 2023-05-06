const getMessage = require("../../Controllers/conversationController/getMessage");

const getMsgHandler = async(req, res) => {
  try {
   const { convId } = req.params;
   const conversation = await getMessage(convId);
   return res.status(200).json(conversation)
  } catch (err) {
   return res.status(500).json(err)
  }
 }
 
 module.exports = getMsgHandler;