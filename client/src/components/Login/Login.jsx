import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos del formulario al servidor o realizar alguna acción con ellos
  };

  /* {
        email, not null
        nickName, not null
        password not null
    } 
    */
  return (
    <div className="formulario-externo-login">
      <div className="formulario-container formulario-background">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-container__left">
            <label className="form-login-title">
              Bienvenido a <b className="form-login-subtitle">UrbanClub!</b>
              {/*El isotipo en negro para el login:
              <img src="isoneg.png" alt="Logo Negro" />
              */}
            </label>
          </div>
          <div className="form-container__middle">
            <label>
              <div>Nickname:</div>
              <input type="text" maxLength={45} required />
            </label>
            <label>
              <div>Correo:</div>
              <input type="email" maxLength={45} required />
            </label>
            <label>
              <div>Contraseña:</div>
              <input type="text" maxLength={45} required />
            </label>
          </div>
          <div className="form-container__right">
            <button className="upload-picture-button" type="submit">
              Ingresar
            </button>
            <br />
            <label>
              <NavLink to="/register" className="nav-link active">
                Aun no tiene usuario?
              </NavLink>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
