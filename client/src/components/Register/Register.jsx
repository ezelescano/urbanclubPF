import React, { useState } from "react";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos del formulario al servidor o realizar alguna acción con ellos
  };

  return (
    <>
      Está es la página register
      <div className="formulario-container">
        <form onSubmit={handleSubmit}>
          <label>
            Foto de Perfil:
            <input type="file" />
          </label>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
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
          <label>
            Ciudad:
            <input
              type="text"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </label>
          <label>
            País:
            <input
              type="text"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </label>
          <label>
            Ocupación:
            <input
              type="text"
              value={ocupacion}
              onChange={(e) => setOcupacion(e.target.value)}
            />
          </label>
          <label>
            Descripción:
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Formulario;
