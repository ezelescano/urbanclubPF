import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import style from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [input, setInput] = useState({
    email: "",
  });

  const changeHandler = (e) => {
    setInput({
      email: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // axios.put("https://pruebaback-production-0050.up.railway.app/artist/forgotPassword", input);
    axios.put("/artist/forgotPassword", input);
    setInput({
      email: "",
    });
    swal({
      title: "Recuperación de contraseña",
      text: "Se ha enviado el correo electrónico",
      icon: "success",
      buttons: "Aceptar",
    });
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={submitHandler}>
        <label className={style.label}>Ingresa tu correo electrónico</label>
        <input 
          className={style.input}
          type="text"
          name="email"
          value={input.email}
          onChange={changeHandler}
        />
        <button className={style.newPasswordButton} type="submit">
          Recuperar contraseña
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;