import React, { useEffect, useState } from "react";
import styles from "./ProfileEdit.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteArtist } from "../../redux/artistSlice";


const ProfileEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const usuario = useSelector((state) => state.artist.usuario);
console.log(usuario)
  const [input, setInput] = useState({
    name: usuario.name,
    lastname: usuario.lastname,
    nickname: usuario.nickname,
    // profilePhoto: "",
    // coverPhoto: "",
    email: usuario.email,
    password: "",
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
    axios
      .put(`http://localhost:3001/artist/update/${id}`, input)
      .then(alert("Datos actualizados correctamente"))
      .catch((errors) => console.log(errors));
    // setInput({
    //   name: usuario.name,
    //   lastname: usuario.lastname,
    //   nickName: usuario.nickName,
    //   // profilePhoto: "",
    //   // coverPhoto: "",
    //   email: usuario.email,
    //   password: "",
    //   city: usuario.city,
    //   Country: usuario.Country,
    //   ocupation: usuario.ocupation,
    //   aboutMe: usuario.aboutMe,
    // });
  }

  function handleClick(){
    dispatch(deleteArtist(id));
    alert("Artista borrado correctamente");
    setInput({
      name: "",
      lastname: "",
      nickname: "",
      // profilePhoto: "",
      // coverPhoto: "",
      email: "",
      password: "",
      city: "",
      Country: "",
      ocupation: "",
      aboutMe: "",
    });
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

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
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
          <label>
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
          </label>
          <label>
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
          </label>
          <label>
            <div>
              <span style={{ color: "red" }}>*</span> Nickname:
            </div>
            <input
              type="text"
              value={input.nickname}
              onChange={handleOnChange}
              onBlur={handleOnChange}
              name="nickname"
            />
          </label>
          <label>
            <div>
              <span style={{ color: "red" }}>*</span> Contraseña:
            </div>
            <input
              type="text"
              maxLength={45}
              value={input.password}
              onChange={handleOnChange}
              onBlur={handleOnChange}
              name="password"
              required
            />
          </label>
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
          <label>
            <div>Ocupacion:</div>
            <input
              type="text"
              value={input.ocupation}
              onChange={handleOnChange}
              onBlur={handleOnChange}
              maxLength={35}
              name="ocupation"
            />
          </label>
          <label>
            Descripción:
            <textarea
              value={input.aboutMe}
              onChange={handleOnChange}
              onBlur={handleOnChange}
              maxLength={500}
              name="aboutMe"
            />
          </label>
          <button className="upload-form-button" type="submit">
            Save Changes
          </button>
        </div>
      </form>
      <button onClick={handleClick}>Delete user</button>
    </>
  );
};

export default ProfileEdit;
