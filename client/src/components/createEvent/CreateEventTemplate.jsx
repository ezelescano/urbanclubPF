import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postEvent } from "../../redux/eventSlice";

import "./CreateEvent.css";

const CreateEventTemplate = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    eventPhoto: "",
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
      eventPhoto: file.name,
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

    
    const formData = new FormData(e.target);
    formData.append("id_Artist", id);
    dispatch(postEvent(formData, navigate("/events")));
  };

  return (
    <>
      <div className="formulario-externo-registro">
        <div className="formulario-container formulario-background">
          <div className="error_back"></div>
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
                Crea un Evento en<br></br> <b>Urban Club!</b>
              </label>
            </div>
            <div className="form-container__middle">
              <label className="required">
                <div>
                  <span style={{ color: "red" }}>*</span> Nombre del Evento:
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
                  <span style={{ color: "red" }}>*</span> Precio:
                </div>
                <input
                  placeholder={errors.price}
                  type="text"
                  value={input.price}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="price"
                  maxLength={35}
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Direciion del evento:
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
                  <span style={{ color: "red" }}>*</span> Estadio / Teatro /
                  Lugar:
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
                <div>Fecha:</div>
                <input
                  type="text"
                  value={input.date}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="date"
                />
              </label>
              <button className="upload-form-button" type="submit">
                Crear Evento
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEventTemplate;
