import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postEvent } from "../../redux/eventSlice";
import "./CreateEvent.css";

const CreateEvent = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    eventPhoto:
      "https://res.cloudinary.com/draxxv99e/image/upload/v1682710844/defaulr_urbanclub/coverPhoto_rmh1lj.png",
    name: "",
    price: 0,
    location: "",
    nameArena: "",
    date: "",
  });

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.name) {
      alert("Se requiere completar los campos");
    } else {
      dispatch(postEvent(input));
      alert("Evento creado!");
      setInput({
        eventPhoto:
          "https://res.cloudinary.com/draxxv99e/image/upload/v1682710844/defaulr_urbanclub/coverPhoto_rmh1lj.png",
        name: "",
        price: 19.99,
        location: "",
        nameArena: "",
        date: "",
      });
    }
  };

  return (
    <div className="create-event">
      <div className="create-event-container">
        <div className="create-event-left">
          <img src={input.eventPhoto} alt="event" />
        </div>
        <div className="create-event-right">
          <form className="create-event-form" onSubmit={handleSubmit}>
            <h2>Crea Tu Evento</h2>
            <div className="form-inputs">
              <div className="input-container">
                <label htmlFor="name">Nombre del evento:</label>
                <br />
                <input
                  type="text"
                  name="name"
                  maxLength="35"
                  placeholder="Colocar nombre del evento"
                  required
                  value={input.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="price">Precio de la entrada: U$D</label>
                <br />
                <input
                  type="number"
                  name="price"
                  step="2.5"
                  placeholder="Ingrese un precio"
                  required
                  value={input.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="location">Ubicación:</label>
                <br />
                <input
                  type="text"
                  name="location"
                  placeholder="Ingrese como ubicar tu evento :)"
                  maxLength="50"
                  required
                  value={input.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="nameArena">Nombre del arena / Escenario:</label>
                <br />
                <input
                  type="text"
                  name="nameArena"
                  placeholder="Nombre del local"
                  maxLength="35"
                  required
                  value={input.nameArena}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="date">Fecha:</label>
                <br />
                <input
                  type="date"
                  name="date"
                  required
                  value={input.date}
                  onChange={handleInputChange}
                />
              </div>
              <br />
              <div className="submit-button">
                <button type="submit">Crear Evento</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;

// crear el formulario con los campos a completar
// crear los handler que van a manejar los eventos
// crear los dispatch que van a ejecutar las acciones.
// name, price, location, nameArena, date, eventPhoto
