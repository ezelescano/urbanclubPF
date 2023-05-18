import React, { useEffect, useState } from "react";
import styles from "./ProfileEdit.module.css";
import swal from "sweetalert";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { deleteArtist, updateArtist } from "../../redux/artistSlice";

const ProfileEdit = ({ usuario, handleEdit, handleShowEdit }) => {
  const [errors, setErrors] = useState({});
  const [profilePhotoPreview, setProfilePhotoPreview] = useState("");
  const [coverPhotoPreview, setCoverPhotoPreview] = useState("");
  const [options, setOptions] = useState([
    "Bailarin",
    "Cantante",
    "Musico",
    "Actor",
    "Pintor",
    "Modelo",
  ]);

  const [input, setInput] = useState({
    name: usuario.name,
    email: usuario.email,
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
    const formData = new FormData(e.target);
    if (!input.ocupation) {
      swal({
        title: "ERROR",
        text: "Se debe seleccionar al menos 1 ocupación",
        icon: "error",
        buttons: "Aceptar",
      });
      return;
    }
    formData.append("ocupation", input.ocupation);
    handleEdit(formData);

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1200);
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

  const otherInput = document.querySelector('input[name="otherOccupation"]');
  const otherChb = document.querySelector('input[name="other"]');

  function handleOccupationChange(e) {
    const selectedOption = e.target.value;
    const isSelected = e.target.checked;
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
  }

  console.log(options.reduce(remOcupation, input.ocupation));
  const [otherOc, setOtherOc] = useState(
    options.reduce(remOcupation, input.ocupation)
  );
  function handleOnChange(e) {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "otherOccupation") {
      setInput((input) => ({
        ...input,
        ocupation: addOcupation(remOcupation(input.ocupation, otherOc), value),
      }));
      setOtherOc(value);
      return;
    }
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
  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePhotoPreview("");
    }
  };
  const handleCoverPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setCoverPhotoPreview("");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerflex}>
        <button className={styles.containerExit} onClick={handleShowEdit}>
          X
        </button>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.filesContainer}>
            <div>Editar foto de perfil:</div>
            {profilePhotoPreview && (
              <div>
                <img
                  src={profilePhotoPreview}
                  alt="Profile Photo Preview"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              </div>
            )}
            <input
              type="file"
              name="profilePhoto"
              accept=".jpg, .jpeg, .png"
              onChange={handleProfilePhotoChange}
              className={styles.profileChange}
            />
            <br />
            <div>Editar foto de portada:</div>
            {coverPhotoPreview && (
              <img
                src={coverPhotoPreview}
                alt="Cover Photo Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            )}
            <input
              type="file"
              name="coverPhoto"
              accept=".jpg, .jpeg, .png"
              onChange={handleCoverPhotoChange}
              className={styles.bannerChange}
            />
          </div>
          <br />

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
              <div>Descripción:</div>
              <input
                type="text"
                value={input.aboutMe}
                onChange={handleOnChange}
                onBlur={handleOnChange}
                name="aboutMe"
              />
            </label>
            <div className={styles.occ}>
              <h3>Ocupaciones</h3>
              {options.map((option) => (
                <label key={option}>
                  <div className={styles.ocupationList}>
                    <input
                      type="checkbox"
                      value={option}
                      checked={input.ocupation.includes(option)}
                      onChange={handleOccupationChange}
                    />
                    <div className={styles.ocupationName}>{option}</div>
                  </div>
                </label>
              ))}
              <label>Otros</label>
              {
                /* { otherChb.checked && */ <input
                  type="text"
                  value={otherOc}
                  name="otherOccupation"
                  pattern="[a-zA-Z ]{3,15}"
                  onChange={handleOnChange}
                  placeholder="Ingresa tu oficio"
                />
              }
            </div>
            <div className={styles.submitButton}>
              <button type="submit">Guardar cambios</button>
            </div>
          </div>
        </form>
        <div className={styles.button}></div>
      </div>
    </div>
  );
};

export default ProfileEdit;
