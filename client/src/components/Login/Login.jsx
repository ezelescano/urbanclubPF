import React, { useState } from "react";
import styles from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import GoogleButton from "../GoogleButton/googleButton";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleClick = async () => {
    // const googleLoginURL = "https://pruebaback-production-0050.up.railway.app/artist/auth/google";
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
  //navigate("/artist");
  //Esto es para debuggear, No dejar en produccion #####porfavor#####.
  //const token = response.data.token;
  /*  const artist = jwt_decode(token); // Acá te lo decodifica ###
      localStorage.setItem("token", token);
      localStorage.setItem("artist", JSON.stringify(artist)); */
  // No funciona más en esta version history.push("/home");
  //Acá te lo muestra ###
  return (
    <div className={styles.formularioExternoLogin}>
      <div className={styles.formularioContainer}>
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
            <button className={styles.uploadSubmitButton} type="submit">
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
            <div className={styles.googleContainer}>
              <GoogleButton></GoogleButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
