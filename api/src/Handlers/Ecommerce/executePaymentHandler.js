const { executePaymentController } = require("../../Controllers/EcommerceController");

require("dotenv").config();
const request = require('request');

const executePaymentHandler =async  (req,res) =>{
try {
   const result =  executePaymentController(req,res);
   res.json(result)
} catch (error) {
    
}
}

module.exports = executePaymentHandler;