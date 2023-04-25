import React, { useState, useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Login.css";

function Login() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [alias, setAlias] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rutaImagen, setRutaImagen] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos del formulario al servidor o realizar alguna acción con ellos
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setRutaImagen(reader.result);
    };
  };

  const handleNombreChange = (event) => {
    const nombreValue = event.target.value;
    if (nombreValue.length <= 15) {
      setNombre(nombreValue);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  /* {

        name,   not null
        lastname,  not null
        email, not null
        profilePhoto:"", null
        coverPhoto:"", null
        nickName, not null
        country:"", null
        city:"", null
        ocupation:"", null
        aboutMe:"", null
        password not null
    } 
    */
  return (
    <div className="formulario-externo">
      <div className="formulario-container formulario-background">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-container__left">
            <label className="form-login-title">
              Bienvenido a <b className="form-login-subtitle">UrbanClub!</b>
            </label>
          </div>
          <div className="form-container__middle">
            <label>
              <div>
                Nickname:
              </div>
              <input
                type="text"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
              />
            </label>
            <label>
              <div>
              Correo:
              </div>
              <input type="email" maxLength={45} required />
            </label>

            <label>
              <div>
              Contraseña:
              </div>
              <input type="text" maxLength={45} required />
            </label>
          </div>
          <div className="form-container__right">
            <button className="upload-picture-button" type="submit">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
