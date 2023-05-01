import "./profile.css";
import React, { useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistId, clearProfile, deleteArtist, updateArtist } from "../../redux/artistSlice";
//import { getauth, clearProfile } from "../../redux/artistSlice";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import Settings from "../Settings/Settings";
import ProfileEdit from "../ProfileEdit/ProfileEdit";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usuario = useSelector(state => state.artist.usuario);
  const currentUser = useSelector(state => state.auth.user);

  const [showSettings, setShowSettings] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const [followDemostrativo, setFollowDemostrativo] = useState(911)
  const verified = true
  const links = [{
    youtube: "https://www.youtube.com/",
    twitter: "https://twitter.com/"
  }]
  const events = [
    {
      id: 1,
      name: "Evento 1",
      date: "29 de abril de 2023",
      location: "Ciudad A",
      description: "Descripción del evento 1",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1534447677768-be436bb09401_rampxl.png",
    },
    {
      id: 2,
      name: "Evento 2",
      date: "30 de abril de 2023",
      location: "Ciudad B",
      description: "Descripción del evento 2",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712168/photo-1490604001847-b712b0c2f967_flsfsy.png",
    },
    {
      id: 3,
      name: "Evento 3",
      date: "1 de mayo de 2023",
      location: "Ciudad C",
      description: "Descripción del evento 3",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1502786129293-79981df4e689_ivqjf8.png",
    },
    {
      id: 4,
      name: "Evento 4",
      date: "2 de mayo de 2023",
      location: "Ciudad D",
      description: "Descripción del evento 4",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1444080748397-f442aa95c3e5_lvphop.png",
    },
    {
      id: 5,
      name: "Evento 5",
      date: "3 de mayo de 2023",
      location: "Ciudad E",
      description: "Descripción del evento 5",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1518098268026-4e89f1a2cd8e_kifydl.png",
    },
    {
      id: 6,
      name: "Evento 6",
      date: "4 de mayo de 2023",
      location: "Ciudad F",
      description: "Descripción del evento 6",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1459213599465-03ab6a4d5931_wo41ug.png",
    }
  ];

  const isCurrentUser = currentUser && currentUser.id === usuario.id;

  const {
    name,
    lastname,
    profilePhoto,
    coverPhoto,
    Country,
    city,
    ocupation,
    aboutMe,
  } = usuario;

  const { id } = useParams();
  const eventosRef = useRef(null);

  
/*   const token = localStorage.getItem("token");
 if (!token) {
    // Redirigir a la página de inicio de sesión
    alert('inicia sesion')
    navigate("/login");
    return
  } */

  useEffect(() => {
    dispatch(getArtistId(id));
    return () => {      //le paso un return cuando se desmonta
      dispatch(clearProfile())
    }
  }, [dispatch, id]);

  const scrollToEventos = () => {
    eventosRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const handleSettings = () => {
    setShowSettings(!showSettings)
  }

  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  const handlePasswordChange = () => {
    alert("Te estas portado mal seras castiga!!!! 🔥🍻🍻😎😎👩‍🦽💉💉")
  }

  const handleOnBlur = () => {
    setShowSettings(false)
  }

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(`Estas seguro que deseas eliminar la cuenta con el nombre ${name}`)
    if(confirmed && isCurrentUser){
      dispatch(deleteArtist(id))
      alert(`La cuenta ${name} ha sido eliminada correctamente`)
      navigate('/home')
    }
  }

  const handleEdit = (input) => {
    dispatch(updateArtist(id, input))
  }

  const handleLogout = () => {
    const confirmed = window.confirm(`Desea cerrar sesion`)
    if(confirmed && isCurrentUser){
      dispatch(logout())
      navigate("/")
    }
  }

  const handleFollow = () => {
    setFollowDemostrativo(followDemostrativo + 1)
  }

  const handleContact = () => {
    alert("Funcion aun no implementada 😁")
  }

  return (
    <div className="container">
        <div className="portada-profile">
          <img src={coverPhoto} alt="" />
          <div className="rating-g">4.3</div>
        </div>

        <div className="prim-profile">
          
          <div className="foto-ocupacion">
            <img
              className="foto-profile"
              src={profilePhoto}
              alt="no se jaja x2"
            />


            <div className="ocupation-container">
              {/* {usuario.ocupation?.map(o => {
                return(
                  <div className='ocupation'>{o}</div>
                )
              })} */}
              {ocupation && <div className="ocupation">{ocupation}</div>}
            </div>
          </div>
          <div className="info-perfil">
            <div className="nombre-btns">
              <div>
                <div className="nombre">
                <h1>
                    {name}{/*  {lastname} */}
                </h1>
                {/* para saber si es verificado funcion aun no implementada */}
                {verified &&
                    <img className='verificado' src='https://static.vecteezy.com/system/resources/previews/014/296/309/non_2x/blue-verified-social-media-account-icon-approved-profile-sign-illustration-vector.jpg' alt='verificado paa' />
                    }
                <div className="btns">
                  
                  {isCurrentUser ? 
                  <div className="settings-div">
                    <button className="btn-ajustes" onClick={handleSettings} ><img className="ajustes" src="https://thumbs.dreamstime.com/b/icono-de-la-l%C3%ADnea-del-engranaje-en-fondo-negro-ilustraci%C3%B3n-vectores-estilo-plano-170443759.jpg" alt="ajuste"/></button>
                    {showSettings && <Settings handleDeleteAccount={handleDeleteAccount} handleLogout={handleLogout}  handlePasswordChange={handlePasswordChange} handleShowEdit={handleShowEdit}/>}
                    {showEdit && <ProfileEdit handleEdit={handleEdit} id={id} usuario={usuario} handleShowEdit={handleShowEdit}/>}
                  </div>
                  : <div>
                    <button className="btn-profile" onClick={handleFollow}>Seguir</button>
                    <button className="btn-profile" onClick={handleContact}>Contactar</button>
                    </div>
                  }
                </div>  
                </div>
                <h3>
                  {city}, {Country}
                </h3>
              </div>
            </div>
            <div className="stas-profile">
              <button className="btn-stas" onClick={scrollToEventos}>{events.length + ' '} Eventos</button>
              <button className="btn-stas">{followDemostrativo} Seguidores</button>
              <h4>5 Seguidos</h4>
            </div>

            <div className="ab-re">
              <div className="aboutme">
                {aboutMe}
              </div>
              <div className="redes">
                {links?.map((l) => {
                  return (
                    <div className="redes-div">
                      <h4>Otras redes!!</h4>
                      <div className="container-links">
                        {l.youtube && (
                          <a
                            href={l.youtube}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <img
                              className="icon"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBkoHVpJNDq7zkN5eqjnF31QVBGPb7hloyw&usqp=CAU"
                              alt="ds"
                            />
                          </a>
                        )}

                        {l.twitter && (
                          <a
                            href={l.twitter}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <img
                              className="icon"
                              src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Twitter.png"
                              alt="ds"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      {/* <div className="div-eventos">
        <div ref={eventosRef} className="titulo-ev">Eventos</div>
        
        <div>
          {events && <CardsEvents events={events}/>} 
        </div>
      </div> */}
      
    </div>
  );
};

export default Profile;
