import React, { useState, useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Register.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [alias, setAlias] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rutaImagen, setRutaImagen] = useState("");
  const fileInputRef = useRef(null);
  /* {
    -Cambiar los valores por objetos, y usar solo un useState,
     
    -Cambiar los nombres por los de abajo qué usamos en la BD:
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

  function handleSubmit(event) {
    event.preventDefault();
    // aquí va nuestra lógica para enviar el formulario
    window.location.href = "/profile";
  }

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

  return (
    <>
      <div className="formulario-externo-registro">
        <div className="formulario-container formulario-background">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-container__left">
              <label>
                {rutaImagen ? (
                  <img
                    className="form-picture"
                    src={rutaImagen}
                    alt="Imagen de perfil"
                  />
                ) : (
                  <AccountCircleIcon />
                )}
                <button
                  className="upload-picture-button"
                  type="button"
                  onClick={handleClick}
                >
                  Subir foto
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <hr />
                Registrate a<br></br> <b>Urban Club!</b>
              </label>
            </div>
            <div className="form-container__middle">
              <label className="required">
                <div>
                  <span style={{ color: "red" }}>*</span> Nombre:
                </div>
                <input
                  type="text"
                  value={nombre}
                  onChange={handleNombreChange}
                  maxLength="35"
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Apellido:
                </div>
                <input
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  maxLength={35}
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Correo:
                </div>
                <input type="email" maxLength={45} required />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Nickname:
                </div>
                <input
                  type="text"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Contraseña:
                </div>
                <input type="text" maxLength={45} required />
              </label>
            </div>
            <div className="form-container__right">
              <label>
                <div>Ciudad:</div>
                <input
                  type="text"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                />
              </label>
              <label>
                <div>Pais:</div>
                <input
                  type="text"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                />
              </label>
              <label>
                <div>Ocupacion:</div>
                <input
                  type="text"
                  value={ocupacion}
                  onChange={(e) => setOcupacion(e.target.value)}
                  maxLength={35}
                />
              </label>
              <label>
                Descripción:
                <textarea
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  maxLength={500}
                />
              </label>
              <button className="upload-form-button" type="submit">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Formulario;
