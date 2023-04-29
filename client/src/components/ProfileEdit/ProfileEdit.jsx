import React, { useEffect, useState } from 'react';
import styles from "./ProfileEdit.module.css";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistId } from '../../redux2/artistSlice';


const ProfileEdit = () => {

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const usuario = useSelector(state => state.artist.usuario);
  console.log(usuario);

const id = 1;
  useEffect(() => {
   dispatch(getArtistId(id))
  },[dispatch]);


  const [input, setInput] = useState({
    name: "",
    lastname: "",
    nickName: "",
    profilePhoto: "",
    coverPhoto: "", //Not here
    email: "",
    password: "",
    city: "", //Not here
    Country: "", //Not here:
    ocupation: "", //Not here:
    aboutMe: "", //Not here:
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
    const id = 1;
    // if (!input.name) {
    //   return alert("Name is required");
    // }
    // console.log(input); 
    axios
      .put(`http://localhost:3008/artist/update/${id}`, input)
      .then(alert("Datos actualizados correctamente"))
      .catch((errors) => console.log(errors))
    // dispatch(postartist(input));
    //alert(`Artist ${input.name} has been added`);
    // setInput({
    //   name: "",
    //   password: "",
    //   aboutMe: "",
    // });
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

  return (<>
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
                  value={input.nickName}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="nickName"
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
  </>
  )
}

export default ProfileEdit