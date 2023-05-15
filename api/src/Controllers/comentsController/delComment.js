const { EventComment } = require("../../db");

const delComment = async (idComment) => {
  console.log(idComment);
  if (!idComment) {
    throw new Error("Id not found in database");
  }
  const deletedComment = EventComment.destroy({ where: { id: idComment } });
  return "The comment has been deleted";
};

module.exports = delComment;
