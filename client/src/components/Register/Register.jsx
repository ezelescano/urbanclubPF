import React, { useState, useRef } from "react";
// import { useDispatch } from "react-redux"; Aún no.
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import postartist from "../../redux/actions/postartist";
import axios from "axios";
import "./Register.css";

/*Sinó usá esto: 
let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  return errors;

  Y Lo haces con cada propiedad de
*/
//Codigo nuevo, No probado aun:
function validate(input) {
  return Object.keys(input).reduce((errors, key) => {
    return {
      ...errors,
      [key]: input[key] ? "" : `El ${key} es obligatorio`,
    };
  }, {});
}

function Formulario() {
  // const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    nickName: "",
    profilePhoto: "",
    coverPhoto: "", //Not here
    email: "",
    password: "",
    city: "", //Not here
    country: "", //Not here:
    ocupation: "", //Not here:
    aboutMe: "", //Not here:
  });

  const [errors, setErrors] = useState({});
  const [rutaImagen, setRutaImagen] = useState("");

  const fileInputRef = useRef(null);

  function handleOnChange(e) {
    //Colocar los inputs en mi objeto
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    //Colocar los errores en un listado
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input + errors);
    //Aclara qué no va en los inputs en mi objeto
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      coverPhoto: "No en Register.jsx",
      city: "No en Register.jsx",
      country: "No en Register.jsx",
      aboutMe: "No en Register.jsx",
    });
  }
  //Manipular el archivo qué se sube:
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    //Recomendar a Estiven qué desarme el archivo en varios console.log así ve qué es lo qué le sirve
    console.log(file[1]);
    console.log(e + e.target + e.target.files[0]);
    console.log(e.target);
    //Este es el file -> console.log(e.target.files[0]);
    axios
      .post("http://localhost:3001/artist", e.target.files[0])
      .then((res) => console.log(res))
      .catch((errors) => errors);
    const reader = new FileReader();

    console.log("El nombre de tu foto de perfil es " + file.name);
    setInput({
      ...input,
      profilePhoto: file.name,
    });
    //Esta funcion no deberia ser enviada a la base de datos aún, Estiven sigue trabajando en cloudinary.
    reader.readAsDataURL(file);
    reader.onload = () => {
      setRutaImagen(reader.result);
    };
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  //Esta función aun tiene qué ser migrada a dispatch, pero funciona :)
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Se envio el formulario");
    alert(`El Artista ${input.name} Fue añadido`);
    setInput({
      name: "",
      lastname: "",
      nickName: "",
      profilePhoto: "",
      email: "",
      password: "",
      city: "",
      country: "",
      ocupation: "",
      aboutMe: "",
    });
    console.log("Esto es lo qué escribiste: ");
    console.table(input);
    axios
      .post("http://localhost:3001/artist", input)
      .then((res) => console.log(res))
      .catch((errors) => errors);
    //Tratar de utilizar dispatch con postartist, input. Falta reparar al final...
  }

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
                <br></br>
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
                  onBlur={handleOnChange}
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
                  value={input.lastname}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="lastname"
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
                  onBlur={handleOnChange}
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
                  onBlur={handleOnChange}
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
                  onBlur={handleOnChange}
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
                  onBlur={handleOnChange}
                  name="city"
                />
              </label>
              <label>
                <div>Pais:</div>
                <input
                  type="text"
                  value={input.country}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="country"
                />
              </label>
              <label>
                <div>Ocupacion:</div>
                <input
                  type="text"
                  value={input.ocupation}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  maxLength={35}
                  name="ocupation"
                />
              </label>
              <label>
                Descripción:
                <textarea
                  value={input.aboutMe}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
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
