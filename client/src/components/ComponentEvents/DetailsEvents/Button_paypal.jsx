// import paypal from "https://www.paypal.com/sdk/js?client-id=test&currency=USD"


import React, { useState } from 'react'

function paypalButon(props) {
  const value = 15
  console.log(props.compra);
    // paypal.buttons({

    // })
    
  return (
    <div>
        <button onClick={()=>props.boton(value)} >pagar paypal</button>
    </div>
  )
}

export default paypalButon