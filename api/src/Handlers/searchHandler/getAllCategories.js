// const {allCategories} = require("../../Controllers/artistControllers")
const categories = require ("../../../utils/categories")


const getAllCategories = async function (req, res) {
    try {
      res.status(200).send(categories);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports= {
    getAllCategories,
}