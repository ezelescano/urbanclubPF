const {
  forgotPassword,
} = require("../../Controllers/artistControllers/forgotPassword");

const forgotPasswordHandler = async (req, res) => {
  const { email } = req.body;
  try {
    const artist = await forgotPassword(email);
    res.status(200).json(artist)
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
};

module.exports = { forgotPasswordHandler };
