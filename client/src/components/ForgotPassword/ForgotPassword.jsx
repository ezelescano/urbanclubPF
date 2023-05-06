import { useState } from "react";
import { useDispatch } from "react-redux";
//import style from "./ForgotPassword.module.css";
import axios from "axios";

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
    axios.put("http://localhost:3001/artist/forgotPassword", input);
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
