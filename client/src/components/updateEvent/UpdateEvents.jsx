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
    name: event.name,
    price: event.price,
    stock:event.stock,
    Description:event.Description,
    city:event.city,
    Country:event.Country,
    location: event.location,
    nameArena: event.nameArena,
    date: event.date,
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
                  <span style={{ color: "red" }}>*</span> Nombre Del Evento:
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
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Dirección:
                </div>
                <input
                  placeholder={errors.location}
                  type="text"
                  value={input.location}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="location"
                  maxLength={45}
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Nombre del lugar:
                </div>
                <input
                  placeholder={errors.nameArena}
                  type="text"
                  value={input.nameArena}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="nameArena"
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> fecha:
                </div>
                <input
                  placeholder={errors.date}
                  type="text"
                  maxLength={45}
                  value={input.date}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="date"
                  required
                />
              </label>
              <p className={style.errorsFrond}>{errors.date}</p>
             
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Cantidad Boletos:
                </div>
                <input
                  placeholder={errors.stock}
                  type="number"
                  step="0.01"
                  value={input.stock}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="stock"
                  maxLength={35}
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Precio Entrada $US:
                </div>
                <input
                  placeholder={errors.price}
                  type="number"
                  step="0.01"
                  value={input.price}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="price"
                  maxLength={35}
                  required
                />
              </label>
            </div>
            <div className={style.formContainerRight}>
              
              <label>
                Descripción:
                <textarea
                  className={style.descripcionArea}
                  value={input.Description}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  placeholder="500 Palabras max"
                  maxLength={150}
                  name="Description"
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
                  Guardar
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
