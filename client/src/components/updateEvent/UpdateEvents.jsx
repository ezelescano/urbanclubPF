import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./UpdateEvents.module.css";
import { postArtist, errorsCreate } from "../../redux/artistSlice";

import swal from "sweetalert";

import loading from "../../img/loading.gif";
import { upEvent } from "../../redux/eventSlice";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Formulario({id,event}) {
  const { errorForm } = useSelector((state) => state.artist);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    price: "",
    location: "",
    nameArena: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [rutaImagen, setRutaImagen] = useState("");
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState({});

  function validate(input) {
    const errors = {};
    if (!input.name) {
      errors.name = "Se require Nombre del Evento";
    }
    if (!input.eventPhoto) {
      errors.eventPhoto = "Se requiere Foto";
    }
    if (!input.price) {
      errors.price = "Se requiere Precio";
    }
    if (!input.location) {
      errors.location = "Se requiere Direccion";
    }
    if (!input.nameArena) {
      errors.nameArena = "Se requiere Nombre del Lugar";
    }
    if (!input.date) {
      errors.date = "Se requiere Fecha";
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


  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(errors);
    const formData = new FormData(e.target);
    formData.append("id_Artist", id)
     dispatch(upEvent(formData,));
     swal({
      title: "ERROR",
      text: "Se debe seleccionar al menos 1 ocupación",
      icon: "error",
      buttons: "Aceptar",
    });
  }


  return (
    <>
      <div >
    
        <div className={style.formularioContainer}>
        
          <div className={style.errorBack}>
            <p>{errorForm.error}</p>
          </div>
          <h2>{`Editar evento ${event.name}`}</h2>
          <form onSubmit={handleSubmit} className={style.formContainer}>
         
            <div className={style.formContainerLeft}>
            
              <label>
                {rutaImagen ? (
                  <img
                    className={style.formPicture}
                    src={rutaImagen}
                    alt="Imagen de evento"
                  />
                ) : (
                  ""
                )}
                <button
                  className={style.uploadPictureButton}
                  type="button"
                  name="eventPhoto"
                  onClick={handleClick}
                >
                  Subir foto
                </button>
                <input
                  type="file"
                  accept="image/png,image/jpg,image/jpeg"
                  name="eventPhoto"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <br></br>
                <b>editar foto evento </b>
              </label>
            </div>
            <div className={style.formContainerMiddle}>
           
              <label className={style.required}>
                <div>
                  <span style={{ color: "red" }}>*</span> Nombre:
                </div>
                <input
                  placeholder={errors.name}
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
                  placeholder={errors.lastname}
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
                  placeholder={errors.email}
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
                  placeholder={errors.nickName}
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
                  placeholder={errors.password}
                  type="password"
                  maxLength={45}
                  value={input.password}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="password"
                  required
                />
              </label>
              <p className={style.errorsFrond}>{errors.password}</p>
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
            <div className={style.formContainerRight}>
              
              <label>
                Descripción:
                <textarea
                  className={style.descripcionArea}
                  value={input.aboutMe}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  placeholder="500 Palabras max"
                  maxLength={150}
                  name="aboutMe"
                />
              </label>

              {isLoading && (
                <div className={style.loadingGif}>
                  <img
                    className="loading"
                    src={loading}
                    alt=""
                    width="50px"
                  ></img>
                </div>
              )}
              {!isLoading && (
                <button className={style.uploadFormButton} type="submit">
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
