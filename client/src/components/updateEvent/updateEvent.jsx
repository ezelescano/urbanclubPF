import React, { useEffect, useState } from "react";
import styles from "./ProfileEdit.module.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { upEvent } from "../../redux/eventSlice";



const EditEvent  = ({creaEvents}) => {

const dispatch = useDispatch();
const { id } = useParams();
  const [errors, setErrors] = useState({});


  const [input, setInput] = useState({
    name: creaEvents.name,
    price: creaEvents.price,
    location: creaEvents.location, 
    nameArena: creaEvents.nameArena,
    date: creaEvents.date,
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


  function handleOnChange(e) {
    const property = e.target.name;
    const value = e.target.value;
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerflex}>
        <button className={styles.containerexit} onClick={handleOnChange}>
          X
        </button>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <input type="file" name="eventPhoto"></input>
          <div className="form-container__middle">
            <label className="required">
              <div>
                <span style={{ color: "red" }}>*</span> Nombre del Evento:
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
          <div className="form-container__right">
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
           
            <button className="upload-form-button" type="submit">
              Guardar Cambios
            </button>
          </div>
        </form>
        <div className={styles.button}></div>
      </div>
    </div>
  );
};

export default EditEvent;
