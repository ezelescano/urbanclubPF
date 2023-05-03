import React from 'react'
import "./Errors404.css"
import img from "./img/404.png"

function Errors404() {
    return (
        <div className='container'>
            <div className='h_s'>
                <h1 className='border'>Lo Sentimos...</h1>
            </div>
            <div className='img'>
                <img src={img} alt="" />

            </div>
            <div className='txt'>
                <p>La pagina que esta buscando no existe...</p>
            </div>
            {/* <div className='btn-home'>
                <NavLink to="/">
                    <button >HOME</button>
                </NavLink>
            </div> */}
        </div>
    )
}

export default Errors404