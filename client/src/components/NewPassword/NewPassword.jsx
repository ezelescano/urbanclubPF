import style from "./NewPassword.module.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
// import { updateArtist } from "../../redux/artistSlice";
import axios from "axios";

const NewPassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState({
    password: "",
  });
  const [password2, setPassword2] = useState({
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
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
      try {
        const updatedPassword = await axios.put(
          `/artist/newPassword/${id}/${token}`,
          password
        );
        setPassword({ password: "" });
        setPassword2({ password2: "" });
        swal({
          title: "Contraseña actualizada",
          text: "Debes iniciar sesión",
          icon: "success",
          buttons: {
            confirm: "Aceptar",
            cancel: "Cancelar",
          },
        }).then((value) => {
          if (value) {
            navigate("/login");
          } else {
            return;
          }
        });
      } catch (error) {
        swal({
          title: "Operación inválida",
          text: "Su token ha expirado",
          icon: "error",
          buttons: "Aceptar",
        });
      }
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
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <input className={style.input}
            type="password"
            name="password"
            value={password.password}
            onChange={changeHandlerPassword}
          />
        </div>
        <div className={style.inputContainer}>
          <input className={style.input}
            type="password"
            name="password2"
            value={password2.password2}
            onChange={changeHanlderPassword2}
          />
        </div>
        {errors && <p>{errors.password}</p>}
        <button className={style.newPasswordButton} type="submit">
          Guardar nueva contraseña
        </button>
      </form>
    </div>
  );
};

export default NewPassword;
