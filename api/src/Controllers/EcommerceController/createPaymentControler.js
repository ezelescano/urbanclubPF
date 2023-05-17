require("dotenv").config();
const {URL_FRONT,URL_BACK} = require("../../env")
const request = require('request');
const { CLIENT_PAYPAL, SECRET_PAYPAL, API_PAYPAL } = process.env;


const createPaymentControler = (req, res) => {

    // const environment = new paypal.core.SandboxEnvironment(userCredentials.client_id, userCredentials.client_secret);
    // const client = new paypal.core.PayPalHttpClient(environment);
    // Canadiandollar = CAD
    // Euro=EUR
    // Mexicanpeso = MXN
    // UnitedStatesdollar = USD

    const { value, brand_name } = req.body
    const auth = { user: CLIENT_PAYPAL, pass: SECRET_PAYPAL }
    console.log(value, brand_name)
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: value
            }
        }],
        application_context: {
            brand_name: brand_name,
            landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
            user_action: 'PAY_NOW', //  PAY_NOW Accion para que en paypal muestre el monto del pago
            return_url: `${URL_BACK}/ticket/execute-payment`, // Url despues de realizar el pago
            cancel_url: `${URL_BACK}/ticket/cancel-payment` // Url despues de realizar el pago
        }
    }
    //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]

    request.post(`${API_PAYPAL}/v2/checkout/orders`, {
        auth,
        body,
        json: true
    }, (err, response) => {
        data = {
            id: response.body.id,
            status: response.body.status,
            link: response.body.links[1].href,
        }
        res.json(data)
    })
}

module.exports = createPaymentControler;