const testFx = require("../../Controllers/artistControllers/testFx")

const testFunction = async (req, res) => {
    try {
        const response = await testFx()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = testFunction