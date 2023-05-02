import React, { useEffect, useState } from "react";
import styles from "./ProfileEdit.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { deleteArtist, updateArtist } from "../../redux/artistSlice";

const ProfileEdit = ({ usuario, handleEdit, handleShowEdit }) => {
  const [errors, setErrors] = useState({});

  const [options, setOptions] = useState([
    "Dancer",
    "Singer",
    "Musician",
    "Actor",
  ]);

  const [input, setInput] = useState({
    name: usuario.name,
    // lastname: usuario.lastname, //Aun no se ve reflejado
    // nickName: usuario.nickName, //Aun no se ve reflejado
    // profilePhoto: "",
    // coverPhoto: "",
    email: usuario.email,
    // password: usuario.password,
    city: usuario.city,
    Country: usuario.Country,
    ocupation: usuario.ocupation,
    aboutMe: usuario.aboutMe,
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
    handleEdit(input);
  }

  function addOcupation(ocupation, selected) {
    if (ocupation.includes(selected)) {
      return ocupation;
    } else {
      return ocupation.length > 0 ? ocupation + "," + selected : selected;
    }
  }

  function remOcupation(ocupation, selected) {
    if (ocupation.includes(selected)) {
      ocupation = ocupation.replace(selected, "").replace(",,", ",");
      if (ocupation.charAt(0) === ",") ocupation = ocupation.substring(1);
      if (ocupation.charAt(ocupation.length - 1) === ",")
        ocupation = ocupation.substring(0, ocupation.length - 1);
      return ocupation;
    } else {
      return ocupation;
    }
  }
  function handleOccupationChange(e) {
    const selectedOption = e.target.value;
    const isSelected = e.target.checked;

    // if (isSelected) {
    //   setInput((input) => ({
    //     ...input,
    //     ocupation: [...input.ocupation, selectedOption],
    //   }));
    // } else {
    //   setInput((input) => ({
    //     ...input,
    //     ocupation: input.ocupation.filter(
    //       (option) => option !== selectedOption
    //     ),
    //   }));
    // }
    if (isSelected) {
      setInput((input) => ({
        ...input,
        ocupation: addOcupation(input.ocupation, selectedOption),
      }));
    } else {
      setInput((input) => ({
        ...input,
        ocupation: remOcupation(input.ocupation, selectedOption),
      }));
    }

    // check if "other" option is selected and a value is entered
    const otherInput = document.querySelector('input[name="otherOccupation"]');
    if (
      otherInput &&
      selectedOption === "other" &&
      otherInput.value.trim() !== ""
    ) {
      setInput((input) => ({
        ...input,
        ocupation: [...input.ocupation, otherInput.value.trim()],
      }));
      otherInput.value = ""; // clear the input field
    }
  }

  function handleOnChange(e) {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "ocupation") {
      console.log(input);
      setErrors(validate({ ...input, ocupation: [...input.ocupation, value] }));
      setInput({
        ...input,
        ocupation: [/*...input.ocupation,*/ value],
      });
    } else {
      setInput({
        ...input,
        [property]: value,
      });
      setErrors(
        validate({
          ...input,
          [property]: value,
        })
      );
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerflex}>
        <button className={styles.containerexit} onClick={handleShowEdit}>
          X
        </button>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          {/* <div className="form-container__left">
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        {/* <div className="form-container__left">
              <label>
                {rutaImagen ? (
                  <img
                    className="form-picture"
                    src={rutaImagen}
                    alt="Imagen de perfil"
                  />
                ) : (
                  <AccountCircleIcon />
                )}
                <button
                  className="upload-picture-button"
                  type="button"
                  onClick={handleClick}
                >
                  Subir foto
                </button> 
                 <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <br></br>
                Registrate a<br></br> <b>Urban Club!</b>
              </label>
            </div> */}
          <div className="form-container__middle">
            <label className="required">
              <div>
                <span style={{ color: "red" }}>*</span> Nombre:
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
            {/* <label>
            <div>
              <span style={{ color: "red" }}>*</span> Apellido:
            </div>
            <input
              type="text"
              value={input.lastname}
              onChange={handleOnChange}
              onBlur={handleOnChange}
              name="lastname"
              maxLength={35}
              required
            />
          </label> */}
            {/* <label>
              <div>
                <span style={{ color: "red" }}>*</span> Correo:
              </div>
              <input
                type="email"
                value={input.email}
                onChange={handleOnChange}
                onBlur={handleOnChange}
                name="email"
                maxLength={45}
                required
              />
            </label> */}
            {/* <label>
            <div>
              <span style={{ color: "red" }}>*</span> Nickname:
            </div>
            <input
              type="text"
              value={input.nickName}
              onChange={handleOnChange}
              onBlur={handleOnChange}
              name="nickName"
            />
          </label> */}
          </div>
          <div className="form-container__right">
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
            <div
              style={{
                justifyContent: "space-between",
                gap: "0.5rem",
                padding: "5px",
              }}
              className="occupation-options"
            >
              {options.map((option) => (
                <label key={option}>
                  <input
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
                  value="Aun no se agrega otros"
                  checked={input.ocupation.includes("Aun no se agrega otros")}
                  onChange={handleOccupationChange}
                />
                Otros
              </label>
              {input.ocupation.includes("Aun no se agrega otros") && (
                <input
                  type="text"
                  value={input.value}
                  name="otherOccupation"
                  placeholder="Ingresa tu oficio"
                />
              )}
            </div>
            <button className="upload-form-button" type="submit">
              Save Changes
            </button>
          </div>
        </form>
        <div className={styles.button}></div>
      </div>
    </div>
  );
};

export default ProfileEdit;
