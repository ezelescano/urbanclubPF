import React from 'react';

const googleButton = () => {
  const handleLogin = async () => {
    let timer = null;
    const googleLoginURL = "http://localhost:3001/artist/auth/google"
    const newWindow = window.open(googleLoginURL,"_blank","width=350,height=450")

    if(newWindow) {
        timer = setInterval(() => {
            if(newWindow.closed) {
                console.log("We are authenticated");
                // fetchAuthUser() //! activar con la funcion de arriba
                if(timer) clearInterval(timer)
            } 
        }, 500)
    }
  };

  return (
    <button onClick={handleLogin}>Iniciar sesión con Google</button>
  );
};

export default googleButton;
