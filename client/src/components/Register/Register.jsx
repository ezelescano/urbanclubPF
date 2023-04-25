import React, { useState, useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Register.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
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

  const handleCorreoChange = (event) => {
    const correoValue = event.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correoValue)) {
      setCorreo(correoValue);
    }
  };

  const handleNombreChange = (event) => {
    const nombreValue = event.target.value;
    if (nombreValue.length <= 15) {
      setNombre(nombreValue);
    }
  };
  // Se utilizará luego
  //   const handleApellidoChange = (event) => {
  //     const apellidoValue = event.target.value;
  //     if (apellidoValue.length <= 15) {
  //       setApellido(apellidoValue);
  //     }
  //   };

  //   const handleDescripcionChange = (event) => {
  //     const descripcionValue = event.target.value;
  //     if (descripcionValue.length <= 500) {
  //       setDescripcion(descripcionValue);
  //     }
  //   };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="formulario-externo">
      <div className="formulario-container formulario-background">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-container__left">
            <label>
              {rutaImagen ? (
                <img src={rutaImagen} alt="Imagen de perfil" />
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
            </label>
          </div>
          <div className="form-container__middle">
            <label>
              Nombre:
              <input
                type="text"
                value={nombre}
                onChange={handleNombreChange}
                maxLength="15"
                required
              />
            </label>
            <label>
              Correo:
              <input
                type="email"
                value={correo}
                onChange={handleCorreoChange}
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              />
            </label>
            <label>
              Apellido:
              <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                maxLength={15}
                required
              />
            </label>
            <label>
              Alias (opcional):
              <input
                type="text"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
              />
            </label>
          </div>
          <div className="form-container__right">
            <label>
              Ciudad:
              <input
                type="text"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                required
              />
            </label>
            <label>
              País:
              <input
                type="text"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                required
              />
            </label>
            <label>
              Ocupación:
              <input
                type="text"
                value={ocupacion}
                onChange={(e) => setOcupacion(e.target.value)}
                maxLength={15}
                required
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
            <button className="upload-picture-button" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
