import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import { postArtist, errorsCreate } from "../../redux/artistSlice";
import swal from "sweetalert";

import loading from "../../img/loading.gif";
import {
  BTX_ACEPTAR,
  EM_ALIAS_INV,
  EM_APELLIDO_INV,
  EM_CORREO_INV,
  EM_NOMBRE_INV,
  EM_OCUPAT_SEL1,
  EM_PASS_CARACT,
  ICO_ERROR,
  TLE_ERROR,
} from "../../utils/messages";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Formulario() {
  const { errorForm } = useSelector((state) => state.artist);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
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
    "Bailarin",
    "Cantante",
    "Musico",
    "Actor",
    "Pintor",
    "Modelo",
  ]);

  const [errors, setErrors] = useState({
    name: EM_NOMBRE_INV,
    lastname: EM_APELLIDO_INV,
    nickName: EM_ALIAS_INV,
    email: EM_CORREO_INV,
    password: EM_PASS_CARACT,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rutaImagen, setRutaImagen] = useState("");
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState({});

  function validate(input, target = "") {
    const errors = {};
    if (!input.name) {
      errors.name = EM_NOMBRE_INV;
    }
    if (!input.lastname) {
      errors.lastname = EM_APELLIDO_INV;
    }
    if (!input.email) {
      errors.email = EM_CORREO_INV;
    }
    if (!input.nickName) {
      errors.nickName = EM_ALIAS_INV;
    }
    if (input.password.length < 8) {
      errors.password = EM_PASS_CARACT;
    }
    return errors;
  }

  function handleOnChange(e) {
    // console.log("errores///", errors.password);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  async function handleSubmit(e) {
    e.preventDefault();

    let errorMsgs = "";
    if (input.ocupation.length < 1) {
      errorMsgs = errorMsgs + EM_OCUPAT_SEL1 + "\n";
      if (!!Object.keys(errors).length) {
        errorMsgs =
          errorMsgs +
          Object.keys(errors)
            .map((e) => errors[e])
            .join("\n");
      }
      await swal({
        title: TLE_ERROR,
        text: errorMsgs,
        icon: ICO_ERROR,
        buttons: BTX_ACEPTAR,
      });
    } else {
      setIsLoading(true);
      const formData = new FormData(e.target);
      formData.append("ocupation", input.ocupation);
      const error = await dispatch(postArtist(formData, navigate));
      setIsLoading(false);
    }
    // console.log(error)
    // console.log(2)
  }

  return (
    <>
      <div className={style.formularioExternoRegistro}>
        <div className={style.formularioContainer}>
          <div className={style.errorBack}>
            <p>{errorForm.error}</p>
          </div>
          <form onSubmit={handleSubmit} className={style.formContainer}>
            <div className={style.formContainerLeft}>
              <label>
                {rutaImagen ? (
                  <img
                    className={style.formPicture}
                    src={rutaImagen}
                    alt="Imagen de perfil"
                  />
                ) : (
                  ""
                )}
                <button
                  className={style.uploadPictureButton}
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
                <div className={style.sugerencia}>
                  Registrate a<br></br> <b>Urban Club!</b>
                </div>
              </label>
            </div>
            <div className={style.formContainerMiddle}>
              <label className={style.required}>
                <div>
                  <span style={{ color: "red" }}>*</span> Nombre:
                </div>
                <input
                  // placeholder={errors.name}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  type="text"
                  value={input.name}
                  maxLength="25"
                  name="name"
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Apellido:
                </div>
                <input
                  // placeholder={errors.lastname}
                  type="text"
                  value={input.lastname}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="lastname"
                  maxLength={25}
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Correo:
                </div>
                <input
                  // placeholder={errors.email}
                  type="email"
                  value={input.email}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="email"
                  maxLength={45}
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Alias:
                </div>
                <input
                  // placeholder={errors.nickName}
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
                  // placeholder={errors.password}
                  type="password"
                  maxLength={20}
                  value={input.password}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="password"
                />
              </label>
              {/* <p className={style.errorsFrond}>{errors.password}</p> */}
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
              {input.name &&
              input.lastname &&
              input.email &&
              input.nickName &&
              input.password ? null : (
                <span style={{ color: "red" }}>* : Campos obligatorios</span>
              )}
            </div>
            <div className={style.formContainerRight}>
              <label>
                <div className={style.occupationsOptions}>
                  {options.map((option) => (
                    <label key={option}>
                      <input
                        className={style.occupationsOptionsList}
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
                      value="Otros"
                      checked={input.ocupation.includes("Otros")}
                      onChange={handleOccupationChange}
                    />
                    Otros
                  </label>
                  {input.ocupation.length === 0 && (
                    <span style={{ color: "red" }}>
                      Seleccione al menos una ocupación
                    </span>
                  )}
                  {input.ocupation.includes("Otros") && (
                    <input
                      type="text"
                      value={input.value}
                      name="otherOccupation"
                      placeholder="Ingresa tu oficio"
                    />
                  )}
                </div>
              </label>
              <label>
                Descripción:
                <textarea
                  className={style.descripcionArea}
                  value={input.aboutMe}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  placeholder="150 Palabras max"
                  maxLength={150}
                  name="aboutMe"
                />
              </label>
              {isLoading && (
                <div className={style.loadingGif}>
                  <img
                    className={style.loading}
                    src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1684119388/Untitled_mjallz.png"
                    alt=""
                  ></img>
                </div>
              )}
              {!isLoading && (
                <button
                  name="submit"
                  className={style.uploadFormButton}
                  type="submit"
                >
                  Registrarse
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Formulario;
