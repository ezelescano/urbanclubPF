import "./UpdatePassword.css";
import { useState } from "react";

const UpdatePassword = ({ handleEdit }) => {
  const [input, setInput] = useState({
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors) {
      handleEdit(input);
    } else {
      alert("Estás actuando de mala manera, deberás ser disciplinada");
    }
  };

  const validate = (password1, password2) => {
    let errors = {};
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password1)) {
      errors.password =
        "La contraseña debe contener un caracter especial, un número, una maýuscula y una minúscula";
    }
    if (password1 !== password2) {
      errors.password = "La contraseña no coincide";
    } else {
      errors = {};
    }
    return errors;
  };

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;
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
  };

  return (
    <div className="container-updatePassword">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="password1"
          value={input.password1}
          onChange={changeHandler}
        ></input>
        <input
          type="password"
          name="password2"
          value={input.password2}
          onChange={changeHandler}
        ></input>
        {errors && <p>{errors.password}</p>}
        <button type="submit">Guardar nueva contraseña</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
