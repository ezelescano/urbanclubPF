import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import postartist from "../../redux/actions/postartist";
import axios from "axios";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  return errors;
}

export default function Register() {
//const dispatch = useDispatch();
//Crear el objeto a manipular
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    nickName: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
//Colocar los inputs en mi objeto
  function handleOnChange(e) {
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
  }
//Manipular el archivo qué se sube:
  function handleImageUpload(e) {
    const file = e.target.files;
    
    if (file) { 
      const reader = new FileReader();
      reader.onloadend = () => {
        setInput({
          ...input,
          profilePhoto: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name) {
      return alert("Name is required");
    }
  

     axios  
      // .post("https://pruebaback-production-0050.up.railway.app/artist", input)
      .post("/artist", input)
      .then((res) => console.log(res))
      .catch((errors) => errors);


    // dispatch(postartist(input));
    alert(`Artist ${input.name} has been added`);
     setInput({
       name: "",
       password: "",
       aboutMe: "",
     });
  }
  //Acá en el original hay un handleFileChange...

  return (
    <>
      <div>
        <h1>Add a new artist</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Artist Name:</label>
            <input
              onChange={handleOnChange}
              onBlur={handleOnChange}
              type="text"
              name="name"
              value={input.name}
            />
            {errors.name && <p> {errors.name} </p>}
            <label>Last Name:</label>
            <input
              onChange={handleOnChange}
              onBlur={handleOnChange}
              type="text"
              name="lastname"
              value={input.lastname}
            />
            <label>Email:</label>
            <input
              onChange={handleOnChange}
              onBlur={handleOnChange}
              type="text"
              name="email"
              value={input.email}
            />
            <label>NickName:</label>
            <input
              onChange={handleOnChange}
              onBlur={handleOnChange}
              type="text"
              name="nickName"
              value={input.nickName}
            />

            <label>Artist Password:</label>
            <input
              onChange={handleOnChange}
              onBlur={handleOnChange}
              type="text"
              name="password"
              value={input.password}
            />
            <label>Image:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {input.image && <img src={input.image} alt="preview" />}

            <button type="submit">Add artist</button>
          </div>
        </form>
      </div>
    </>
  );
}
