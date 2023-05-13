require("dotenv").config();
const request = require('request');
const {CLIENT_PAYPAL,SECRET_PAYPAL, API_PAYPAL } = process.env;
const auth = { user: CLIENT_PAYPAL, pass: SECRET_PAYPAL }

const executePaymentController = (req,res) =>{
    const token = req.query.token; //<-----------
    request.post(`${API_PAYPAL}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        const data = response.body
        const info = {
            id_compra: data.id,
            status:data.status,
            email: data.payment_source.paypal.email_address,
            account_id:data.payment_source.paypal.account_id,
            name:data.payment_source.paypal.name.given_name,
            surname:data.payment_source.paypal.name.surname,
            address:data.purchase_units[0].shipping.address,
            payments:data.purchase_units[0].payments.captures[0].amount,
}
      
        res.json({ info })
    })

}
module.exports = executePaymentController;