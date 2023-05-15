const delComment = require("../../Controllers/comentsController/delComment");

const delCommentHandler = async (req, res) => {
  const { idComment } = req.params;
  try {
    const deletedComment = await delComment(idComment);
    return res.status(200).json({ message: "Comment deleted!" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = delCommentHandler;
