import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import postartist from "../../redux/actions/postartist";
import { useNavigate } from "react-router-dom";
import "./Register.css";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/*Sinó usá esto: 
let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  return errors;

  Y Lo haces con cada propiedad de
*/
//Codigo nuevo, Tendriamos que console loguearlo cada error porfavor: @@@@@
function validate(input) {
  return Object.keys(input).reduce((errors, key) => {
    console.log(errors + "Aquí" + key); //Por ejemplo algo así. @@@@@
    return {
      ...errors,
      [key]: input[key] ? "" : `El ${key} es obligatorio`,
    };
  }, {});
}
//ocupation: "" , ###### Si o si tiene qué ser algo como "Dancer" o "Freak Show" #######
function Formulario() {
 const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    nickName: "",
    profilePhoto: "",
    coverPhoto: "", //Not here
    email: "",
    password: "",
    city: "", //Not here
    country: "", //Not here:
    ocupation: "", //Not here: //Ahora esté debe ser un select Option proximamente. ########
    aboutMe: "", //Not here:
  });

  const [errors, setErrors] = useState({});
  const [rutaImagen, setRutaImagen] = useState("");
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState({});

  function handleOnChange(e) {
    //Colocar los inputs en mi objeto
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    //Colocar los errores en un listado
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    //Este "setInput({"Aclara qué no va en los inputs en mi objeto
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      coverPhoto: "Cambiarlo en el editar perfil.",
    });
  }
  //Manipular el archivo qué se sube:
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const files = e.target.files;
    setFiles(files);
    const reader = new FileReader();
    setInput({
      ...input,
      profilePhoto: file.name,
    });
    reader.readAsDataURL(file);
    reader.onload = () => {
      setRutaImagen(reader.result);
    };
    console.log("El nombre de tu foto de perfil es " + file.name);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(postartist(formData));
    navigate("/"); // redirige al usuario a la ruta /artists
    // ##### Ya utilizamos dispatch, Esté es el fixing leftovers del axios  <3. ######
    // console.log("Se envio el formulario");
    // alert(`El Artista ${input.name} Fue añadido`);
    // setInput({
    //   name: "",
    //   lastname: "",
    //   nickName: "",
    //   profilePhoto: "",
    //   email: "",
    //   password: "",
    //   city: "",
    //   country: "",
    //   ocupation: "",
    //   aboutMe: "",
    // });
    // console.log("Esto es lo qué escribiste: ");
    // console.table(input);
    // axios
    //   .post("http://localhost:3001/artist", input)
    //   .then((res) => console.log(res))
    //   .catch((errors) => errors);
    //##### Ya utilizamos dispatch, Esté es el fixing leftovers del axios <3. ######
  }

  return (
    <>
      <div className="formulario-externo-registro">
        <div className="formulario-container formulario-background">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-container__left">
              <label>
                {rutaImagen ? (
                  <img
                    className="form-picture"
                    src={rutaImagen}
                    alt="Imagen de perfil"
                  />
                ) : (
                  ""
                )}
                <button
                  className="upload-picture-button"
                  type="button"
                  name="profilePhoto"
                  onClick={handleClick}
                >
                  Subir foto
                </button>
                <input
                  type="file"
                  accept="image/png,image/jpg,image/jpeg"
                  name="profilePhoto"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <br></br>
                Registrate a<br></br> <b>Urban Club!</b>
              </label>
            </div>
            <div className="form-container__middle">
              <label className="required">
                <div>
                  <span style={{ color: "red" }}>*</span> Nombre:
                </div>
                <input
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  type="text"
                  value={input.name}
                  maxLength="35"
                  name="name"
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Apellido:
                </div>
                <input
                  type="text"
                  value={input.lastname}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="lastname"
                  maxLength={35}
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Correo:
                </div>
                <input
                  type="email"
                  value={input.email}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="email"
                  maxLength={45}
                  required
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Nickname:
                </div>
                <input
                  type="text"
                  value={input.nickName}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="nickName"
                />
              </label>
              <label>
                <div>
                  <span style={{ color: "red" }}>*</span> Contraseña:
                </div>
                <input
                  type="text"
                  maxLength={45}
                  value={input.password}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="password"
                  required
                />
              </label>
            </div>
            <div className="form-container__right">
              <label>
                <div>Ciudad:</div>
                <input
                  type="text"
                  value={input.city}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="city"
                />
              </label>
              <label>
                <div>Pais:</div>
                <input
                  type="text"
                  value={input.country}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="country"
                />
              </label>
              <label>
                <div>Ocupación:</div>
                <select
                  value={input.ocupation}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  name="ocupation"
                >
                  <option value="Dancer">Dancer</option>
                  <option value="Circus">Circus</option>
                  <option value="Puppeteer">Puppeteer</option>
                  <option value="Statue">Statue</option>
                  <option value="Magician">Magician</option>
                </select>
              </label>
              <label>
                Descripción:
                <textarea
                  value={input.aboutMe}
                  onChange={handleOnChange}
                  onBlur={handleOnChange}
                  maxLength={500}
                  name="aboutMe"
                />
              </label>
              <button className="upload-form-button" type="submit">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Formulario;
