import "./profile.css";
import React, { useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArtistId,
  clearProfile,
  deleteArtist,
  updateArtist,
} from "../../redux/artistSlice";
import swal from "sweetalert";
//import { getauth, clearProfile } from "../../redux/artistSlice";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import Settings from "../Settings/Settings";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import UpdatePassword from "../UpdatePassword/UpdatePassword";
import Error404 from "../Error404/Errors404"
import CreateEvent from "../createEvent/CreateEvent";
import { getAllEvents } from "../../redux/eventSlice";
import { EM_NO_USER_ID } from "../../utils/messages";


const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const eventsArtist = useSelector((state) => state.events.allEvents);
  const usuario = useSelector((state) => state.artist.usuario);
  const currentUser = useSelector((state) => state.auth.user);
  const errorId = useSelector((state)=> state.artist.errorId)

  const [showSettings, setShowSettings] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [followDemostrativo, setFollowDemostrativo] = useState(911);
  const verified = true;
  const links = [
    {
      youtube: "https://www.youtube.com/",
      twitter: "https://twitter.com/",
    },
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

  const ocupationArray = ocupation && ocupation.length && ocupation.split(",");

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
    dispatch(getAllEvents());
    dispatch(getArtistId(id))
    return () => {
      //LIMPIAR ERROR
      //le paso un return cuando se desmonta
      //dispatch(clearProfile());
    };
  }, [dispatch, id]);

  const scrollToEventos = () => {
    eventosRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const handlePasswordChange = () => {
    setShowEditPassword(!showEditPassword);
  };

  const handleShowCreateEvent = () => {
    navigate(`/createevent/${id}`);
  };

  const handleOnBlur = () => {
    setShowSettings(false);
  };

  const handleDeleteAccount = () => {
    // const confirmed = window.confirm(
    //   `Estas seguro que deseas eliminar la cuenta con el nombre ${name}`
    // );

    swal({
      title: "ELIMINAR CUENTA",
      text: `Estas seguro de eliminar la cuenta de ${name}`,
      icon: "warning",
      buttons: ["No", "Si"],
    })
      .then(async (res) => {
        if (res && isCurrentUser) {
          const confirmed = await dispatch(deleteArtist(id));
          if (confirmed) {
            return swal({
              title: "CUENTA ELIMINADA",
              text: `La cuenta ${name} ha sido eliminada correctamente`,
              icon: "success",
              button: "Aceptar",
            });
          }
        }
      })
      .then((res) => {
        if (res) {
          dispatch(logout());
          window.location.replace("/");
          // navigate("/");
        }
      });
  };

  const handleEdit = (input) => {
    dispatch(updateArtist(id, input));
  };

  const handleLogout = () => {
    swal({
      title: "CERRAR SESION",
      text: `Deseas cerrar la sesion de ${name}`,
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((res) => {
      if (res && isCurrentUser) {
        dispatch(logout());
        navigate("/");
      }
    });
  };

  const handleFollow = () => {
    setFollowDemostrativo(followDemostrativo + 1);
  };

  const handleContact = () => {
    alert("Funcion aun no implementada 😁");
  };

  return (
    <>
    {errorId? <Error404></Error404>:(
    <div className="container">
      
      <div className="portada-profile">
        <img src={coverPhoto} alt="" />
        <div className="rating-g">4.3</div>
      </div>
      <div className="prim-profile">
        <div className="">
          <div className="foto-ocupacion">
            <img
              className="foto-profile"
              src={profilePhoto}
              alt="no se jaja x2"
            />
          </div>
          <div className="ocupation-container">
            {/* {usuario.ocupation?.map(o => {
                return(
                  <div className='ocupation'>{o}</div>
                )
              })} */}
            {/* {ocupation && <div className="ocupation">{ocupation.split(",")}</div>} */}
            {ocupationArray &&
              ocupationArray?.map((ocupation) => (
                <div className="ocupation" key={ocupation}>
                  {ocupation}
                </div>
              ))}
          </div>
        </div>
        <div className="info-perfil">
          <div className="nombre-btns">
            <div>
              <div className="nombre">
                <h1>
                  {name}
                  {/*  {lastname} */}
                </h1>
                {/* para saber si es verificado funcion aun no implementada */}
                {verified && (
                  <img
                    className="verificado"
                    src="https://static.vecteezy.com/system/resources/previews/014/296/309/non_2x/blue-verified-social-media-account-icon-approved-profile-sign-illustration-vector.jpg"
                    alt="verificado paa"
                  />
                )}
              </div>
              <h3>
                {city}, {Country}
              </h3>
            </div>
          </div>
          <div className="stas-profile">
            <button className="btn-stas" onClick={scrollToEventos}>
              {/* {events.length + " "} Eventos //! muestra total de eventos del artista */}
            </button>
            <button className="btn-stas">
              {followDemostrativo} Seguidores
            </button>
            <h4>5 Seguidos</h4>
          </div>
          <div className="ab-re">
            <div className="aboutme">{aboutMe}</div>
            <div className="redes">
              {links?.map((l) => {
                return (
                  <div key={l} className="redes-div">
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
        <div className="btns">
          {isCurrentUser ? (
            <div className="settings-div">
              <button className="btn-ajustes" onClick={handleSettings}>
                <img
                  className="ajustes"
                  src="https://thumbs.dreamstime.com/b/icono-de-la-l%C3%ADnea-del-engranaje-en-fondo-negro-ilustraci%C3%B3n-vectores-estilo-plano-170443759.jpg"
                  alt="ajuste"
                />
              </button>
              {showSettings && (
                <Settings
                  handleDeleteAccount={handleDeleteAccount}
                  handleLogout={handleLogout}
                  handlePasswordChange={handlePasswordChange}
                  handleShowEdit={handleShowEdit}
                  handleShowCreateEvent={handleShowCreateEvent}
                />
              )}
              {showEdit && (
                <ProfileEdit
                  handleEdit={handleEdit}
                  id={id}
                  usuario={usuario}
                  handleShowEdit={handleShowEdit}
                />
              )}
              {showEditPassword && <UpdatePassword handleEdit={handleEdit} />}
            </div>
          ) : (
            <div className="NoAhora">
              <button className="btn-profile" onClick={handleFollow}>
                Seguir
              </button>
              <button className="btn-profile" onClick={handleContact}>
                Contactar
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="div-eventos">
        <div ref={eventosRef} className="titulo-ev">
          Mis eventos
        </div>
        {eventsArtist.map((item) => {
          if (item.id === usuario.id) { //Acá no deberia ser el events.id? para qué el valor de la Imagen del evento primero?
            return (
              <div key={item.id}>
                {
                  <CardsEvents
                    id_art={item.id}
                    name_art={item.name}
                    event={item}
                  />
                }
              </div>
            );
          }
          else
            return (<div> No se enontraron Eventos</div>)
        })}
        {/* <div>{events && <CardsEvents  />}</div>  */}
      </div>
      
    </div>
     )}
    </>
   
  );
};

export default Profile;
