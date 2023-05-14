const postComment = require("../../Controllers/comentsController/postComment");

const postCommentHandler = async (req, res) => {
  const { writer, comment, rating, id_event } = req.body;
  console.log(writer, comment, rating, id_event);
  try {
    const eventComment = await postComment(writer, comment, rating, id_event);
    console.log(eventComment)
    return res.status(200).json(eventComment);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = postCommentHandler;
