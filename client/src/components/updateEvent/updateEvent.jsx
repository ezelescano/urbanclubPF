import React, { useEffect, useState } from "react";
import styles from "../ProfileEdit/ProfileEdit.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { upEvent } from "../../redux/eventSlice";



const EditEvent = () => {

  const { creaEvents } = useSelector((state) => state)


  const dispatch = useDispatch();
  const { id } = useParams();
  const [errors, setErrors] = useState({});


  const [input, setInput] = useState({
    name: "",
    price: "",
    location: "",
    nameArena: "",
    date: "",
  });

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    formData.append("id_Artist", id)
    dispatch(upEvent(formData));
  }


  function handleOnChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })

  }

  return (
    <div >
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" name="eventPhoto"></input>
          <div >
            <label >
              <div>
                <span >*</span> Nombre del Evento:
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
          </div>
          <div >
            <label>
              <div>Precio:</div>
              <input
                type="text"
                value={input.price}
                onChange={handleOnChange}
                onBlur={handleOnChange}
                name="price"
                maxLength={35}
              />
            </label>
            <label>
              <div>Direccion del Evento :</div>
              <input
                type="text"
                value={input.location}
                onChange={handleOnChange}
                onBlur={handleOnChange}
                name="location"
                maxLength={45}
              />
            </label>
            <label>
              <div>Estadio / Teatro / Lugar: :</div>
              <input
                type="text"
                value={input.nameArena}
                onChange={handleOnChange}
                onBlur={handleOnChange}
                name="nameArena"
              />
            </label>
            <label>
              <div>Fecha :</div>
              <input
                type="text"
                value={input.date}
                onChange={handleOnChange}
                onBlur={handleOnChange}
                name="date"
              />
            </label>

            <button type="submit">
              Guardar Cambios
            </button>
          </div>
        </form>
        <div ></div>
      </div>
    </div>
  );
};

export default EditEvent;
