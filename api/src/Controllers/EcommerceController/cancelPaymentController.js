
const cancelPaymentController = (req) =>{
    const token = req.query.token; //<-----------
  return {
    token,
    msg:`el usuario con token ${token} cancelo el producto`
  }
}
module.exports = cancelPaymentController;