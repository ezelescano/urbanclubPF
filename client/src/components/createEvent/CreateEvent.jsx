import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postEvent } from "../../redux/eventSlice";
import swal from "sweetalert";
import loading from "../../img/loading.gif";

import "./CreateEvent.css";

const CreateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    price: "",
    location: "",
    stock: "",
    city: "",
    Country: "",
    nameArena: "",
    date: "",
    Description: "",
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

  // const handleCancel = (e) => {
  //   //Lógica para eliminar con el boton, qué aun no hace nada
  //   //Para añadir el boton, envuelve el IMG "form-picture" y luego añadile un boton.
  //   const file = e.target.files[0];
  //   const files = e.target.files;
  //   setFiles(files);
  //   setInput({
  //     ...input,
  //     eventPhoto: file.name,
  //   });
  // };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  async function handleSubmit(e) {
    e.preventDefault();
   
    if (!input.name.length) {
      await swal({
        title: "ERROR",
        text: "Ingrese almenos el nombre del evento",
        icon: "error",
        buttons: "Aceptar",
      });
      return;
    }
    setIsLoading(true);
    const formData = new FormData(e.target);
    formData.append("id_Artist", id)
     await dispatch(postEvent(formData));
     setIsLoading(false);
    swal({
      title: "EVENTO CREADO CORRECTAMENTE",
      text: `Exitos con tu evento`,
      icon: "success",
      buttons: "Aceptar",
    }).then(res=>{
      if(res){
        navigate(`/profile/${id}`)
       }
    });
  }

  return (
    <div className="createEvent">
      <div className="error_back" style={{ color: "red" }}></div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="createEventContainer">
          <div className="createEventLeft">
            <div className="createEventImgContainer">
              {rutaImagen ? (
                <img
                  className="formPicture"
                  src={rutaImagen}
                  alt="Imagen de perfil"
                />
              ) : (
                ""
              )}
              <br />
              <button
                className="uploadPictureButton"
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
          <div className="createEventRight">
            <div onSubmit={handleSubmit}>
              {/*Esto era el form */}
              <h2>Crea Tu Evento</h2>
              <div className="formInputs">
                <div className="inputContainer">
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

                <div className="inputContainer">
                  <label htmlFor="name">Pais:</label>
                  <br />
                  <input
                    placeholder={errors.name}
                    onChange={handleOnChange}
                    onBlur={handleOnChange}
                    type="text"
                    value={input.city}
                    maxLength="35"
                    name="city"
                    required
                  />
                </div>
                
                <div className="inputContainer">
                  <label htmlFor="name">Ciudad:</label>
                  <br />
                  <input
                    placeholder={errors.name}
                    onChange={handleOnChange}
                    onBlur={handleOnChange}
                    type="text"
                    value={input.Country}
                    maxLength="35"
                    name="Country"
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="location">Direccion:</label>
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
                <div className="inputContainer">
                  <label htmlFor="nameArena">Nombre del lugar:</label>
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
                <div className="inputContainer">
                  <label htmlFor="date">Fecha:</label>
                  <br />
                  <input
                    type="date"
                    value={input.date}
                    onChange={handleOnChange}
                    onBlur={handleOnChange}
                    name="date"
                  />
                </div>

                <div className="inputContainer">
                  <label htmlFor="stock">Cantidad boletos: </label>
                  <br />
                  <input
                    placeholder={errors.stock}
                    type="number"
                    value={input.stock}
                    onChange={handleOnChange}
                    onBlur={handleOnChange}
                    name="stock"
                    maxLength={35}
                    required
                  />
                </div>

                <div className="inputContainer">
                  <label htmlFor="price">Precio: $USD</label>
                  <br />
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
                </div>
                
                <div className="inputContainer">
                  <label htmlFor="">TOTAL USD: {input.price*input.stock}</label>
                </div>
                <div className="inputContainer">
                  <label htmlFor="D">Describe qué se hará</label>
                  <br />
                  <textarea
                    placeholder={
                      "Escribe aquí" +
                      (!errors.Description
                        ? " "
                        : "Oops!: " + errors.Description)
                    }
                    type="text"
                    value={input.Description}
                    onChange={handleOnChange}
                    onBlur={handleOnChange}
                    name="Description"
                    maxLength={150}
                    required
                  />
                </div>
                <br />
                <div className="submitButton">
                  {isLoading && (
                    <div className="loadingGif">
                      <img
                        className="loading"
                        src={loading}
                        alt=""
                        width="30px"
                      ></img>
                    </div>
                  )}
                  {!isLoading && (
                    <button className="submitButton" type="submit">
                      Crear el evento
                    </button>
                  )}
                  <div className="loadingGif"></div>
                </div>
              </div>
            </div>
            {/*Esté es el form*/}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
