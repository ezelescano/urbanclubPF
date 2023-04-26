import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Register.css";

function Formulario() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    nickName: "",
    profilePhoto: "",
    coverPhoto: "",
    email: "",
    password: "",
    city: "",
    country: "",
    ocupation: "",
    aboutMe: "",
  });
  
  const [rutaImagen, setRutaImagen] = useState("");
  const fileInputRef = useRef(null);

  function handleOnChange(e) {
    console.log(input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      coverPhoto: "No en Register.jsx"
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Se envio el formulario");
    alert(`El usuario ${input.name} Fue añadido`);
    setInput({
      name: "",
      lastName: "",
      nickName: "",
      profilePhoto: "",
      email: "",
      password: "",
      city: "",
      country: "",
      ocupation: "",
      aboutMe: "",
    });
    console.log("Esto es lo qué escribiste: " );
    console.table(input);
    // El console.table es para qué se pueda LEER el 
    // [object Object] qué te trae la consola al poner 
    // console.log("Esto: " + input)
  }

  const handleFileChange = (e) => {
    
    const file = e.target.files[0];
    const reader = new FileReader();

     console.log("El nombre de tu foto de perfil es " + file.name);
     setInput({
       ...input,
       profilePhoto: file.name,
     });


    reader.readAsDataURL(file);
    reader.onload = () => {
      setRutaImagen(reader.result);
    };
    
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
                  onChange={handleOnChange}
                  type="text"
                  value={input.name}
                  maxLength="35"
                  name="name"
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Apellido:
                </div>
                <input
                  type="text"
                  value={input.lastName}
                  onChange={handleOnChange}
                  name="lastName"
                  maxLength={35}
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Correo:
                </div>
                <input
                  type="email"
                  value={input.email}
                  onChange={handleOnChange}
                  name="email"
                  maxLength={45}
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Nickname:
                </div>
                <input
                  type="text"
                  value={input.nickName}
                  onChange={handleOnChange}
                  name="nickName"
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Contraseña:
                </div>
                <input
                  type="text"
                  maxLength={45}
                  value={input.password}
                  onChange={handleOnChange}
                  name="password"
                  required
                />
              </label>
            </div>
            <div className="form-container__right">
              <label>
                <div>Ciudad:</div>
                <input
                  type="text"
                  value={input.city}
                  onChange={handleOnChange}
                  name="city"
                />
              </label>
              <label>
                <div>Pais:</div>
                <input
                  type="text"
                  value={input.country}
                  onChange={handleOnChange}
                  name="country"
                />
              </label>
              <label>
                <div>Ocupacion:</div>
                <input
                  type="text"
                  value={input.ocupation}
                  onChange={handleOnChange}
                  maxLength={35}
                  name="ocupation"
                />
              </label>
              <label>
                Descripción:
                <textarea
                  value={input.aboutMe}
                  onChange={handleOnChange}
                  maxLength={500}
                  name="aboutMe"
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
