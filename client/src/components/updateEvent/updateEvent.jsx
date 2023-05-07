import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { upEvent } from "../../redux/eventSlice";


const EditEvent = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  console.log(files);

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
      eventPhoto: file.name,
    });
    reader.readAsDataURL(file);
    reader.onload = () => {
      setRutaImagen(reader.result);
    };
  };

  const handleCancel = (e) => {
    //Lógica para eliminar con el boton, qué aun no hace nada
    //Para añadir el boton, envuelve el IMG "form-picture" y luego añadile un boton.
    const files = e.target.files;
    setFiles(files);
    setInput({
      ...input,
      eventPhoto: "",
    });
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
  }

  return (
    <div className="create-event">
      <div className="error_back" style={{ color: "red" }}></div> 
      <form onSubmit={handleSubmit}>
      <div className="create-event-container">
        <div className="create-event-left">
          <div className="create-event-img-container">
            {rutaImagen ? (
                <img
                  className="form-picture"
                  src={rutaImagen}
                  alt="Imagen de perfil"
                />
            ) : (
              ""
            )}
            <br />
            <button
              className="upload-picture-button"
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
          </div>
        </div>
        <div className="create-event-right">
          <div className="create-event-form" >
            <h2>Modifica tu Evento</h2>
            <div className="form-inputs">
              <div className="input-container">
                <label htmlFor="name">Nombre del evento:</label>
                <br />
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
              </div>
              <div className="input-container">
                <label htmlFor="price">Precio de la entrada: U$D</label>
                <br />
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
              </div>
              <div className="input-container">
                <label htmlFor="location">Ubicación:</label>
                <br />
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
              </div>
              <div className="input-container">
                <label htmlFor="nameArena">Nombre del arena / Escenario:</label>
                <br />
                <input
                  placeholder={errors.nameArena}
                  type="text"
                  value={input.nameArena}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="nameArena"
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="date">Fecha:</label>
                <br />
                <input
                  type="text"
                  value={input.date}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="date"
                />
              </div>
              <br />
              <div className="submit-button">
                <button type="submit">Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};


export default EditEvent;

