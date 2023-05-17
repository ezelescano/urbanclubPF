import React from "react";
import axios from "axios";
import { loginSuccess } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
import {URLS} from "../../env"

const LoginButton = () => {
  const dispatch = useDispatch();
    //! Codigo para autorizar acceso
  const fetchAuthUser = async() => {
    console.log("entre a fetchaurh");
    // const response = await axios.get('https://pruebaback-production-0050.up.railway.app/artist/auth/user', {withCredentials:true}).catch((err) => {
    try {
      const res = await axios.get("/artist")
      console.log(res);

      let response = await axios.get('/artist/auth/user', {withCredentials:true})
      // fetch('https://pruebaback-production-0050.up.railway.app/artist/auth/user',{withCredentials:true})
      // .then(res =>{
      //   console.log(res);
      // })
     console.log(response);
      if (response && response.data) {
        const token = response.data
        dispatch(loginSuccess({ token }))
        //console.log("ahi esta el bendito token amigo!!!!!----->>>> ", response.data)
      }
    } catch (error) {
      console.log(error);
    }
   
  
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    let timer = null;
    const googleLoginURL = `${URLS}/artist/auth/google`
    console.log("loginsucces");
    // const googleLoginURL = "https://pruebaback-production-0050.up.railway.app/artist/auth/google"
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=350,height=450"
    );

      newWindow.addEventListener('message', event => {
        
        console.log(event.origin);
        if(event.origin == URLS) {
        if(event.data) {
           dispatch(loginSuccess( event.data.token ))
          
          // localStorage.setItem('token', event.data.token)

          newWindow.close()
        }

        }
      })
  };


  const googleLogIn = (e) => {
    e.preventDefault()
    const popup = window.open(`${URLS}/artist/auth/google`, "_blank", `location=none width=620 height=700 toolbar=no status=no menubar=no scrollbars=yes resizable=yes`)

    window.addEventListener('message', event => {
      if (event.origin === `${URLS}`) {

        if (event.data) {
          console.log(event.data)
          dispatch(loginSuccess( event.data ))
          // localStorage.setItem('token', event.data.token)

          popup.close()

        }
      }
    })
  }

  return (
    <button
      onClick={googleLogIn}
      className="google"
      style={{
        padding: "10px",
        paddingInline: "10px",
        marginBlock: "10px",
        borderRadius: "10px",
        border: "none",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.3);",
        transition: "all 0.45s ease;",
        display: "flex",
        alignItems: "center",
        gap: "3px",
      }}
    >
      Iniciar sesión con Google{"  "}
      <GoogleIcon />
    </button>
  );
};

export default LoginButton;
