const { Router } = require("express");
const { createPaymentHandler, executePaymentHandler, cancelPaymentHandler } = require("../Handlers/Ecommerce");

const ecommerce = Router();


ecommerce.post("/create-payment",createPaymentHandler)
ecommerce.get(`/execute-payment`, executePaymentHandler)
ecommerce.get('/cancel-payment', cancelPaymentHandler)

module.exports = ecommerce;