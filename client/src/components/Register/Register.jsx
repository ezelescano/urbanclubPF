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

  const [input, setInput] = useState({
    name: "",
    profilePhoto: "",
    password: "",
    email: "oas@asj.com",
    nickName: "algo",
  });
  const [errors, setErrors] = useState({});

  function handleOnChange(e) {
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
    const file = e.target.files[0];
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
    console.log(input);
    axios
      .post("http://localhost:3001/artist", {name:"AlgodelPost"})
      .then((res) => console.log(res))
      .catch((errors) => errors);
    // dispatch(postartist(input));
    //alert(`Artist ${input.name} has been added`);
    setInput({
      name: "",
      password: "",
      aboutMe: "",
    });
  }

  return (
    <>
      <div>
        <h1>Add a new artist</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Description:</label>
            <textarea
              onChange={handleOnChange}
              type="text"
              name="aboutMe"
              value={input.aboutMe}
            />
          </div>
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
