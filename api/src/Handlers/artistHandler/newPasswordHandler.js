const newPasswordController = require("../../Controllers/artistControllers/newPasswordController");


const newPasswordHandler = async (req, res) => {
    const {id} = req.params
    const {password} = req.body;
    try {
        const newPassword = await newPasswordController(id, password);
        res.status(200).json(newPassword)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

module.exports = newPasswordHandler;