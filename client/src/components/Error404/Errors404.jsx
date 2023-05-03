import React from 'react'
import "./Errors404.css"
import { NavLink } from "react-router-dom";
function Errors404() {
    return (
        <div className='container'>
            <div className='h_s'>
                <h1 className='border'>Lo Sentimos...</h1>
            </div>
            <div className='img'>
                <img src="./assets/404.png" alt="" />

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