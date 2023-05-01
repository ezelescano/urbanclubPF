import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import "./Register.css";
import { postArtist } from "../../redux/artistSlice";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// function validate(input) {
//   const errors = {};
//   if (!input.name) {
//     errors.name = "Name is required";
//   }
//   if (!input.lastname) {
//     errors.lastname = "Last name is required";
//   }
//   if (!input.email) {
//     errors.email = "Email is required";
//   }
//   if (!input.nickName) {
//     errors.nickName = "Nickname is required";
//   }
//   if (!input.password) {
//     errors.password = "Password is required";
//   }
//   if (input.occupation.length === 0) {
//     errors.occupation = "Occupation is required";
//   }
//   return errors;
// }

function Formulario() {
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    nickName: "",
    profilePhoto: "",
    coverPhoto: "", //Not here
    email: "",
    password: "",
    city: "",
    Country: "",
    ocupation: [],
    aboutMe: "",
  });
  const [options, setOptions] = useState([
    "Dancer",
    "Singer",
    "Musician",
    "Actor",
  ]);
  const [errors, setErrors] = useState({});
  const [rutaImagen, setRutaImagen] = useState("");
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState({});

  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }
  function handleOtherChange(e) {
    console.log(e.target.value);
    setOptions([...options, e.target.value]);
  }

  function handleOccupationChange(e) {
    const selectedOption = e.target.value;
    const isSelected = e.target.checked;

    if (isSelected) {
      setInput((prevInput) => ({
        ...prevInput,
        ocupation: [...prevInput.ocupation, selectedOption],
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        ocupation: prevInput.ocupation.filter(
          (option) => option !== selectedOption
        ),
      }));
    }

    // check if "other" option is selected and a value is entered
    const otherInput = document.querySelector('input[name="otherOccupation"]');
    if (
      otherInput &&
      selectedOption === "other" &&
      otherInput.value.trim() !== ""
    ) {
      setInput((prevInput) => ({
        ...prevInput,
        ocupation: [...prevInput.ocupation, otherInput.value.trim()],
      }));
      otherInput.value = ""; // clear the input field
    }
  }

  //Manipular el archivo qué se sube:
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const files = e.target.files;
    setFiles(files);
    const reader = new FileReader();
    setInput({
      ...input,
      profilePhoto: file.name,
    });
    reader.readAsDataURL(file);
    reader.onload = () => {
      setRutaImagen(reader.result);
    };
    console.log("El nombre de tu foto de perfil es " + file.name);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("ocupation",input.ocupation)
    console.log(formData);
    dispatch(postArtist(formData));
    alert("Se creo tu perfil");
    console.log(input);
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
                  ""
                )}
                <button
                  className="upload-picture-button"
                  type="button"
                  name="profilePhoto"
                  onClick={handleClick}
                >
                  Subir foto
                </button>
                <input
                  type="file"
                  accept="image/png,image/jpg,image/jpeg"
                  name="profilePhoto"
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
                  required
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
                  required
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
                  value={input.Country}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="Country"
                />
              </label>
            </div>
            <div className="form-container__right">
              <label>
                <div className="occupation-options">
                  {options.map((option) => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        value={option}
                        checked={input.ocupation.includes(option)}
                        onChange={handleOccupationChange}
                      />
                      {option}
                    </label>
                  ))}
                  <label>
                    <input
                      type="checkbox"
                      name="other"
                      value="Necesita otra lógica"
                      checked={input.ocupation.includes("Necesita otra lógica")}
                      onChange={handleOccupationChange}
                    />
                    Otros
                  </label>
                  {input.ocupation.includes("Necesita otra lógica") && (
                    <input
                      type="text"
                      name="otherOccupation"
                      placeholder="Ingresa tu oficio"
                      onKeyDown={handleOtherChange}
                    />
                  )}
                </div>
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
