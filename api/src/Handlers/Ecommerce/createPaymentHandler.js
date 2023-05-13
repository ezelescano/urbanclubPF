
const { createPaymentControler } = require("../../Controllers/EcommerceController");



const createPaymentHandler = async (req,res) =>{
try {
    const orderTicket = await createPaymentControler(req,res)
} catch (error) {
    
}
}

module.exports = createPaymentHandler;