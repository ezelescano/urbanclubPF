import React, { useState } from "react";
import styles from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import GoogleButton from "../GoogleButton/googleButton"
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleClick = async () => {
    const googleLoginURL = "http://localhost:3001/artist/auth/google";
    const newWindow = window.open(
      googleLoginURL,
      "blank",
      "width=500, height=600"
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(input, navigate));
    setInput({
      email: "",
      password: "",
    });
  };
  return (
    <div className={styles.formularioExternoLogin}>
      <div
        className={`${styles.formularioContainer} ${styles.formularioBackground}`}
      >
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.formContainerLeft}>
            <label className={styles.formLoginTitle}>
              Bienvenido a{" "}
              <b className={styles.formLoginSubtitle}>UrbanClub!</b>
            </label>
          </div>
          <div className={styles.formContainerMiddle}>
            <label>
              <div>Correo:</div>
              <input
                type="email"
                maxLength={45}
                required
                value={input.email}
                onChange={(event) =>
                  setInput({ ...input, email: event.target.value })
                }
              />
            </label>
            <label>
              <div>Contraseña:</div>
              <input
                type="password"
                maxLength={45}
                required
                value={input.password}
                onChange={(event) =>
                  setInput({ ...input, password: event.target.value })
                }
              />
            </label>
          </div>
          <div className={styles.formContainerRight}>
            <button className={styles.uploadPictureButton} type="submit">
              Ingresar
            </button>
            <br />
            <label>
              <NavLink to="/register" className={styles.navLinkActive}>
                ¿Aún no tiene usuario?
              </NavLink>
            </label>
            <label>
              <NavLink to="/forgotPassword">¿Olvidaste tu contraseña?</NavLink>
            </label>
            <GoogleButton></GoogleButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
