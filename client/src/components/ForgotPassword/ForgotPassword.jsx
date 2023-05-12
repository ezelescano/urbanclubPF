import { useState } from "react";
//import style from "./ForgotPassword.module.css";
import axios from "axios";
import swal from "sweetalert";

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
    axios.put("http://localhost:3001/artist/forgotPassword", input);
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
    <div>
      <form onSubmit={submitHandler}>
        <label>Ingresa tu correo electrónico</label>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={changeHandler}
        ></input>
        <button type="submit">Recuperar contraseña</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
