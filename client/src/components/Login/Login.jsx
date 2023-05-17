import React, { useState } from "react";
import styles from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import GoogleButton from "../GoogleButton/googleButton";
import swal from "sweetalert";
import {
  EM_CORREO_INV,
  EM_PASS_INV,
  BTX_ACEPTAR,
  TLE_WARNING,
  ICO_WARN,
  ICO_ERROR,
  TLE_ERROR,
} from "../../utils/messages";
import {URLS} from "../../env"
// mostrar error onblur como texto en div, luego mostrar error al intentar registrarse
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    target: "",
  });
  const [errors, setErrors] = useState({
    email: EM_CORREO_INV,
    password: EM_PASS_INV,
  });

  function validate(input) {
    const errors = {};
    // setErrors({email: "",
    //           password: "",});
    if (!input.email?.trim() || !validarCorreo(input.email)) {
      // setErrors({...errors, email : EM_CORREO_INV});
      errors.email = EM_CORREO_INV;
      // swal(errors.email);
    } //else errors.email = ""
    if (!input.password?.trim()) {
      // setErrors({...errors, password: EM_PASS_INV});
      errors.password = EM_PASS_INV;
      // swal(errors.password);
    } //else errors.password = ""
    // setErrors(errors)
    // return !!Object.keys(errors).length;
    return errors;
  }

  // function validateOnBlur(e) {
  //   switch(e.target.name){
  //     case "email": setErrors({email: (!input.email?.trim() || !validarCorreo(input.email))?EM_CORREO_INV:"" });
  //       break;
  //     case "password": setErrors({password: !input.password?.trim()?EM_PASS_INV:"" });
  //       break;
  //     default: validate(input);
  //       break;
  //   }
  // }

  const handleClick = async () => {
    // const googleLoginURL = "https://pruebaback-production-0050.up.railway.app/artist/auth/google";
    const googleLoginURL = `${URLS}/artist/auth/google`;
    const newWindow = window.open(
      googleLoginURL,
      "blank",
      "width=500, height=600"
    );
  };

  const validarCorreo = (str) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str.trim());
  };

  const handleOnChange = (e) => {
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
  };

  const handleOnBlur = (e) => {
    // setErrors({...errors})
    // setErrors(
    //   validate({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  };
  const handleOnFocus = (e) => {
    setErrors(validate(input));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validate(input));
    if (!!Object.keys(errors).length) {
      const errorMsgs = Object.keys(errors)
        .map((e) => errors[e])
        .join("\n");
      swal({
        title: TLE_ERROR,
        text: errorMsgs,
        icon: ICO_ERROR,
        buttons: BTX_ACEPTAR,
      });
      //   swal({
      //   title: TLE_ERROR,
      //   text: Object.keys(errors).map((e) => (errors[e] + "\n")),
      //   icon: ICO_ERROR,
      //   buttons: BTX_ACEPTAR
      // })
    } else {
      dispatch(login(input, navigate));
      setInput({
        email: "",
        password: "",
      });
    }
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
                type="text"
                name="email"
                maxLength={45}
                value={input.email}
                // onBlur={handleOnBlur}
                onChange={handleOnChange}
              />
            </label>
            <label>
              <div>Contraseña:</div>
              <input
                type="password"
                maxLength={45}
                name="password"
                value={input.password}
                // onBlur={handleOnBlur}
                onChange={handleOnChange}
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
              <GoogleButton/>
            </div>
          </div>
        </form>
        
        <div
          className={styles.formContainerMiddle}
          style={{ color: "red" }}
        ></div>
      </div>
    </div>
  );
}

export default Login;
