import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import GoogleButton from "../GoogleButton/googleButton";

//Temporal:
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

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

  // /*En pruebas lo de Google Login: */
  // const clientID =
  //   "155420643556-kumc4k1g46jq1bmoqqjavm5h9ltas5ok.apps.googleusercontent.com";
  // const [user, setUser] = useState({});
  // const [loggedIn, setLoggedIn] = useState(false);

  // const onSuccess = (response) => {
  //   const token = generateToken(64);
  //   setUser({
  //     ...response.profileObj,
  //     userId: response.googleId,
  //     email: response.profileObj.email,
  //     token: token,
  //   });
  //   setLoggedIn(true);
  //   localStorage.setItem("token", token);
  // };
  // const onFailure = (response) => {
  //   console.log("Something went wrong");
  // };
  // const handleLogout = () => {
  //   setUser({});
  //   setLoggedIn(false);
  //   localStorage.removeItem("token");
  // };
  // function generateToken(length) {
  //   const buffer = new Uint8Array(length / 2);
  //   crypto.getRandomValues(buffer);
  //   return Array.prototype.map
  //     .call(buffer, (x) => ("0" + x.toString(16)).slice(-2))
  //     .join("");
  // }

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientID,
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  //   //Esto es solo para eliminar el token al refrescar:
  // }, []);
  // console.log(loggedIn, handleLogout);
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
          </div>
        </form>
      </div>
      {/* PRIMER INTENTO DE GOOGLE LOGIN */}
      {/* <div>
        <h1>Login</h1>
        <div>
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText="Continue with Google"
            cookiePolicy={"single_host_origin"}
          />
        </div>
        {loggedIn && (
          <div>
            <img src={user.imageUrl} alt="User Profile" />
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>User ID: {user.userId}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Login;
