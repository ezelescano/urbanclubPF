import style from "./UpdatePassword.module.css";
import { useState } from "react";
import swal from "sweetalert";

const UpdatePassword = ({ handleEdit }) => {

  const [password, setPassword] = useState({
    password: "",
  });
  const [password2, setPassword2] = useState({
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(
      validate({ password: password.password, password2: password2.password2 })
    );
    if (
      Object.keys(
        validate({
          password: password.password,
          password2: password2.password2,
        })
      ).length === 0
    ) {
      handleEdit(password);
      setPassword({ password: "" });
      setPassword2({ password2: "" });
      swal({
        title: "Información de contraseña",
        text: "Se actualizo la contraseña",
        icon: "success",
        buttons: "Aceptar",
      });
    }
  };

  const validate = (input) => {
    let errors = {};
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (!passwordRegex.test(input.password)) {
      errors.password =
        "La contraseña debe ser de 8 caracteres mínimo, contener dos caracteres especiales, dos número, una maýuscula y una minúscula";
    }
    if (input.password === input.password2) {
      return errors;
    } else {
      errors.password = "Las contraseñas no coinciden";
    }
    return errors;
  };

  const changeHandlerPassword = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setPassword({
      ...password,
      [property]: value,
    });
  };

  const changeHanlderPassword2 = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setPassword2({
      ...password2,
      [property]: value,
    });
  };

  return (
    <div className={style.containerUpdatePassword}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="password"
          value={password.password}
          onChange={changeHandlerPassword}
        ></input>
        <input
          type="text"
          name="password2"
          value={password2.password2}
          onChange={changeHanlderPassword2}
        ></input>
        {errors && <p>{errors.password}</p>}
        <button type="submit">Guardar nueva contraseña</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
