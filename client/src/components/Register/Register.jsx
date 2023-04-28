import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const [file,setFile] = useState({})
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    nickName: "",
    password: "",
    email: "",
    profilePhoto :[]
  });
  const [errors, setErrors] = useState({});

  function handleOnChange(e) {
    // const formData = new FormData()
    // formData.get([e.target.name],e.target.value)
    // debugger

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
  }

  function handleImageUpload(e) {
    const file = e.target.files;
  setFile(file)
   
  //  axios
  //  .post("http://localhost:3008/artist", e.target.files)
  //  .then((res) => console.log(res))
  //  .catch((errors) => errors);
  //  debugger
//  setInput({...input, [input.profilePhoto]:file})
//  console.log("img",input)
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setInput({
    //       ...input,
    //       profilePhoto: reader.result,
    //     });
    //   };
    //   reader.readAsDataURL(file);
    // }
  }

 function handleSubmit(e) {
    e.preventDefault();
   
    // if (!input.name) {
    //   return alert("Name is required");
    // }
    // console.log(input);
    // console.log(input)
    
      
      const formData = new FormData(e.target);
      const ob = {
        name:formData.get("name"),
        lastname:formData.get("lastname"),
        nickName:formData.get("nickName"),
        email:formData.get("email"),
        password:formData.get("password"),
      }
    //  axios
    //   .post("http://localhost:3008/artist", formData)
    //   .then((res) => console.log(res))
    //   .catch((errors) => errors);
      dispatch(postartist(formData));
    // fetch('http://localhost:3008/artist', {
    //   method: 'POST',
    //   body: formData
      
    // })
    // .then(response => {
    //   console.log("respuesta",response)
    // })
    // .catch(error => {
    //   // manejar el error
    // });
    //  dispatch(postartist(ob,formData.getAll("profilePhoto")));
    // console.log(formData)
    //  dispatch(postartist(formData));
    //alert(`Artist ${input.name} has been added`);
    // setInput({
    //   name: "",
    //   password: "",
    //   aboutMe: "",
    // });
  }

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
            <input type="file" name="profilePhoto" accept="image/*" onChange={handleImageUpload} />
            {input.image && <img src={input.image} alt="preview" />}

            <button type="submit">Add artist</button>
          </div>
        </form>
      </div>
    </>
  );
}
