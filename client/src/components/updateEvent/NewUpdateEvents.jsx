import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postArtist, errorsCreate } from "../../redux/artistSlice";
import DrawIcon from "@mui/icons-material/Draw";
import swal from "sweetalert";
import "./UpdateEvents.css";
import loading from "../../img/loading.gif";
import { getDetailEvents, upEvent } from "../../redux/eventSlice";

function UpdateEvents({ id, event }) {
  const { errorForm } = useSelector((state) => state.artist);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    Description: "",
    city: "",
    Country: "",
    location: "",
    nameArena: "",
    date: "",
    eventPhoto: "",
    total: 0,
  });

  const [errors, setErrors] = useState({});
  const [rutaImagen, setRutaImagen] = useState("");
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState({});
  //Nuevo estilado:
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    const getEvent = async () => {
      const event = await dispatch(getDetailEvents(id));
      setInput({
        name: event.payload.name,
        price: event.payload.price,
        stock: event.payload.stock,
        Description: event.payload.Description,
        city: event.payload.city,
        Country: event.payload.Country,
        location: event.payload.location,
        nameArena: event.payload.nameArena,
        date: event.payload.date,
        total: event.payload.price * event.payload.stock,
      });
    };
    getEvent();
  }, [dispatch, id]);

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
      total: input.price * input.stock,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    const filledFields = Object.values(input).filter(
      (value) => value !== ""
    ).length;
    const totalFields = Object.keys(input).length;
    const newProgress = Math.floor((filledFields / totalFields) * 100);
    setProgress(newProgress);
  }

  //Manipular el archivo qué se sube:
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
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
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(errors);
    setIsLoading(true);
    const formData = new FormData(e.target);
    // formData.append("id_Artist", id)
    await dispatch(upEvent(formData, id));
    await dispatch(getDetailEvents(id));
    setIsLoading(false);
    swal({
      title: "DATOS GUARDADOS",
      text: "Evento actualizado correctamente",
      icon: "success",
      buttons: "Aceptar",
    }).then((res) => {
      navigate(`/profile/${user.id}`);
    });
  };

  function handleOnBlur(e) {
    if (e.target.name === "price") {
      if (!e.target.value.includes("."))
        e.target.value = e.target.value + ".00";
      else if (e.target.value.split(".").pop().length > 2)
        e.target.value = e.target.value
          .split(".")
          .shift()
          .concat(".", e.target.value.split(".").pop().substring(0, 2));
      //con regex es mas corto, pero para repasar arrays y strings...
    }
    handleOnChange(e);
  }
  const isEmptyForm = () => {
    // Verificar si todos los campos requeridos están vacíos
    const requiredFields = [
      "name",
      "date",
      "Description",
      "nameArena",
      "location",
      "city",
      "Country",
      "stock",
      "price",
    ];
    for (const field of requiredFields) {
      if (input[field]) {
        return true;
      }
    }
    return false;
  };
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  return (
    <div className="createEvent">
      <div className="error_back" style={{ color: "red" }}></div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="createEventContainer">
          <div className="createEventLeft">
            <div
              className={`createEventImgContainer ${
                rutaImagen ? "fade-in" : ""
              }`}
            >
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
                {rutaImagen ? "Cambiar" : "Cargar foto"}
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
              <div className="formInputs">
                {progress === 100 ? (
                  <div className="progressContainer">
                    <div
                      className="progressBar completed"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="progressText">Todo listo!</div>
                    </div>
                  </div>
                ) : (
                  <div className="progressContainer">
                    <div
                      className="progressBar"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
                <section
                  name="step1"
                  className={currentStep === 1 ? "show" : "hide"}
                >
                  <h2 className="createEventRightTitle">
                    <DrawIcon />
                    Describe tu evento
                  </h2>
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
                    <label htmlFor="date">Fecha:</label>
                    <br />
                    <input
                      type="date"
                      value={input.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={handleOnChange}
                      onBlur={handleOnChange}
                      name="date"
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="D">Descripción del evento:</label>
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
                </section>
                <section
                  name="step2"
                  className={currentStep === 2 ? "show" : "hide"}
                >
                  <h2 className="createEventRightTitle">Ubícalo en el mapa</h2>
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
                    <label htmlFor="location">Dirección:</label>
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
                    <label htmlFor="name">Ciudad:</label>
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
                    <label htmlFor="name">Pais:</label>
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
                </section>
                <section
                  name="step3"
                  className={currentStep === 3 ? "show" : "hide"}
                >
                  <h2 className="createEventRightTitle">Dale un valor</h2>
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
                      min="1"
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
                      value={input.price}
                      onChange={handleOnChange}
                      onBlur={handleOnBlur}
                      name="price"
                      min="1"
                      step="0.01"
                      maxLength={35}
                      required
                    />
                  </div>
                  <div className="inputContainer">
                    <label className="lblPrice" htmlFor="">
                      TOTAL $USD: {input.price * input.stock}
                    </label>
                  </div>
                </section>
                <div className="formArrowButtons">
                  <button
                    type="button" // Cambiado a tipo "button"
                    onClick={handlePreviousStep}
                    className="stepsButtons"
                    disabled={currentStep === 1}
                    style={{ marginRight: "10px" }}
                  >
                    Anterior
                  </button>
                  <button
                    type="button" // Cambiado a tipo "button"
                    onClick={handleNextStep}
                    className="stepsButtons"
                    disabled={currentStep === 3}
                  >
                    Siguiente
                  </button>
                </div>
                <br />
                {isLoading && (
                  <div className="loadingGif">
                    <img
                      className="loading"
                      src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1684119388/Untitled_mjallz.png"
                      alt=""
                    ></img>
                  </div>
                )}
              </div>
              {!isLoading && !isEmptyForm() && progress === 100 && (
                <div className="submitButton">
                  <button className="submitButton" type="submit">
                    Crear el evento
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UpdateEvents;
