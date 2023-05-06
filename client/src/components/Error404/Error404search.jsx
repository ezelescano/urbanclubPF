import React from 'react'
import "./Errors404.css"
import img from "./img/404.png"

function Errors404search() {
    return (
        <div className='container-error'>
            <div className='h_s'>
                <h1 className='border'>Lo Sentimos...</h1>
            </div>
            <div className='img-error'>
                <img src={img} alt="" />

            </div>
            <div className='txt-error'>
                <p>La búsqueda realizada no obtuvo resultado, intente con nuevas palabras</p>
            </div>
            {/* <div className='btn-home'>
                <NavLink to="/">
                    <button >HOME</button>
                </NavLink>
            </div> */}
        </div>
    )
}

export default Errors404search