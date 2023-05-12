const { cancelPaymentController } = require("../../Controllers/EcommerceController");

const cancelPaymentHandler = (req,res)=>{
try {
    const result = cancelPaymentController(req,res)
    res.json(result);
} catch (error) {
    
}
}

module.exports = cancelPaymentHandler;