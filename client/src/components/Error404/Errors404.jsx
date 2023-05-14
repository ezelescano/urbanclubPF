import React from "react";
import style from "./Errors404.module.css";
import img from "./img/404.png";

function Errors404() {
  return (
    <div className={style.containerError}>
      <div className={style.h_s}>
        <h1 className={style.border}>Lo Sentimos...</h1>
      </div>
      <div className={style.imgError}>
        <img src={img} alt="" />
      </div>
      <div className={style.txtError}>
        <p>La pagina que esta buscando no existe...</p>
      </div>
      {/* <div className='btn-home'>
                <NavLink to="/">
                    <button >HOME</button>
                </NavLink>
            </div> */}
    </div>
  );
}

export default Errors404;
