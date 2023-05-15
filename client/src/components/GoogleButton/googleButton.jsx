import React from "react";
import axios from "axios";
import { loginSuccess } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
import {URLS} from "../../env"

const LoginButton = () => {
  const dispatch = useDispatch();
  //! Codigo para autorizar acceso
  const fetchAuthUser = async () => {
    // const response = await axios.get('https://pruebaback-production-0050.up.railway.app/artist/auth/user', {withCredentials:true}).catch((err) => {
      const response = await axios.get('/artist/auth/user', {withCredentials:true}).catch((err) => {
      console.log("Not properly authenticated")
    });
    if (response && response.data) {
      const token = response.data;
      dispatch(loginSuccess({ token }));
      //console.log("ahi esta el bendito token amigo!!!!!----->>>> ", response.data)
    }
  };

  const handleLogin = async () => {
    let timer = null;
    const googleLoginURL = `${URLS}/artist/auth/google`
    // const googleLoginURL = "https://pruebaback-production-0050.up.railway.app/artist/auth/google"
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=350,height=450"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("We are authenticated");
          fetchAuthUser(); //! activar con la funcion de arriba
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  return (
    <button
      onClick={handleLogin}
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
