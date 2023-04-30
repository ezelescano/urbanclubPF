import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import jwt_decode from "jwt-decode"; // Solo utilizar para saber Qué es el token que te traen. ###
import { login } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

function Login() {
const dispatch = useDispatch();


  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  // No funciona más en esta version const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
      dispatch(login(input, navigate))
      setInput({
        email: "",
        password: ""
      })
      
    
      
      //navigate("/artist");
      //Esto es para debuggear, No dejar en produccion #####porfavor#####.
      //const token = response.data.token;
     /*  const artist = jwt_decode(token); // Acá te lo decodifica ###
      localStorage.setItem("token", token);
      localStorage.setItem("artist", JSON.stringify(artist)); */
      // No funciona más en esta version history.push("/home");
       //Acá te lo muestra ###
  };

  return (
    <div className="formulario-externo-login">
      <div className="formulario-container formulario-background">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-container__left">
            <label className="form-login-title">
              Bienvenido a <b className="form-login-subtitle">UrbanClub!</b>
            </label>
          </div>
          <div className="form-container__middle">
            <label>
              <div>Correo:</div>
              <input
                type="email"
                maxLength={45}
                required
                value={input.email}
                onChange={(event) =>
                  setInput({ ...input, email: event.target.value })
                }
              />
            </label>
            <label>
              <div>Contraseña:</div>
              <input
                type="password"
                maxLength={45}
                required
                value={input.password}
                onChange={(event) =>
                  setInput({ ...input, password: event.target.value })
                }
              />
            </label>
          </div>
          <div className="form-container__right">
            <button className="upload-picture-button" type="submit">
              Ingresar
            </button>
            <br />
            <label>
              <NavLink to="/register" className="nav-link active">
                Aún no tiene usuario?
              </NavLink>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
