require("dotenv").config();
const request = require('request');
const {CLIENT_PAYPAL,SECRET_PAYPAL, API_PAYPAL } = process.env;
const auth = { user: CLIENT_PAYPAL, pass: SECRET_PAYPAL }

const executePaymentController = (req,res) =>{
    const token = req.query.token; //<-----------
    console.log("back acepte");
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
 res.send(`
     
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PAGO ACEPTADO</title>
</head>
<body>
<div style="display:flex; justify-content: center;
justify-items: center; background: rgba(9, 151, 239, 0.744);">

<h1>su producto fue pagado con exito</h1>
</div>
<p>gracias por utilizar el servicio de paypal</p>
<p>su compra fue exitosa </p>
<p>porfavor cierre esta ventana para poder enviar el tickete a su correo</p>
<button onclick="window.close()">cerrar</button>
</body>
</html>`)
// res.redirect("")
// res.json(data)
    })

   

}
module.exports = executePaymentController;