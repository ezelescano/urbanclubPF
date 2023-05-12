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
import { deleteEvent } from "../../redux/eventSlice";

import { useNavigate } from "react-router-dom";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import Settings from "../Settings/Settings";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import UpdatePassword from "../UpdatePassword/UpdatePassword";
import Error404 from "../Error404/Errors404";
import CreateEvent from "../createEvent/CreateEvent";
import { getAllEvents } from "../../redux/eventSlice";
import { EM_NO_USER_ID, EM_SYNTAX_ID } from "../../utils/messages";
import loading from "../../img/loading.gif";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usuario = useSelector((state) => state.artist.usuario);
  const currentUser = useSelector((state) => state.auth);
  const errorId = useSelector((state) => state.artist.errorId);

  const [showSettings, setShowSettings] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [followDemostrativo, setFollowDemostrativo] = useState(911);
  const [isLoading, setIsLoading] = useState(true);
  const [followed, setFollowed] = useState(false);
  const [followers, setFollowers] = useState([]);

  const verified = true;
  const links = [
    {
      youtube: "https://www.youtube.com/",
      twitter: "https://twitter.com/",
    },
  ];

  const isCurrentUser = currentUser.user && currentUser.user.id === usuario.id;

  const {
    name,
    lastname,
    profilePhoto,
    coverPhoto,
    Country,
    city,
    ocupation,
    aboutMe,
    events,
    followings
  } = usuario;

  const ocupationArray = ocupation && ocupation.length && ocupation.split(",");

  const { id } = useParams();
  const eventosRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    setIsLoading(false);
    const getFollowers = async() => {
    try {
        const res = await dispatch(getArtistId(id));
        setFollowers(res.followers)
      } catch (error) {
      console.log(error)
      }
    }
    getFollowers();
    return async () => {
      //le paso un return cuando se desmonta
      dispatch(clearProfile());
    };
  }, [id]);

  useEffect(() => {
    const getUser = async() => {
      try {
        const res = await axios.get("/artist/login/me");
        console.log(res.data.followings)
        setFollowed(res.data.followings.includes(usuario?.id))
      } catch (error) {
        console.log(error)
      }
    };
    getUser();
  },[usuario.id, currentUser.user.id])

  // const [prevId, setPrevId] = useState(id);

  // if (id !== prevId) {
  //   setPrevId(id);
  //   navigate(`/profile/${id}`);
  // }

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
          const confirmed = dispatch(deleteArtist(id));
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
      title: "CERRAR SESIÓN",
      text: `Deseas cerrar la sesión de ${name}`,
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((res) => {
      if (res && isCurrentUser) {
        dispatch(logout());
        navigate("/");
      }
    });
  };

  const handleFollow = async() => {
    try {
      if(!followed && !isCurrentUser && currentUser.isAuthenticated){
        await axios.put(`/artist/follow/${usuario.id}/follow`,{
          followerId: `${currentUser.user.id}`
        })
        setFollowers([...followers, currentUser.user.id])
        setFollowed(!followed)
        return
      }
      if(followed && !isCurrentUser && currentUser.isAuthenticated){
        await axios.put(`/artist/follow/${usuario.id}/unfollow`,{
          followerId: `${currentUser.user.id}`
        })
        setFollowers(followers.filter(f => f !== currentUser.user.id))
        setFollowed(!followed)
        return
      }
      swal({
        title: "INICIAR SESIÓN",
        text: `Inicia sesión para poder seguir a ${name}`,
        icon: "info",
        buttons: {
          cancel: "Cancelar",
          confirm: "Iniciar sesión"
        },
      }).then((value) => {
        if (value) {
          navigate("/login");
        } else {
          return;
        }
      });
      
    } catch (error) {
      console.log(error)
    }
  };

  const handleContact = async() => {
    if(currentUser.isAuthenticated && !isCurrentUser){
    const res = await axios.get(`/conversation/${currentUser.user.id}/${usuario.id}`);
      navigate("/messenger")
      return
    }
    swal({
      title: "INICIAR SESIÓN",
      text: `Inicia sesión para poder hablar con ${name}`,
      icon: "info",
      buttons: {
        cancel: "Cancelar",
        confirm: "Iniciar sesión"
      },
    }).then((value) => {
      if (value) {
        navigate("/login");
      } else {
        return;
      }
    });
  };

  const islogin = useSelector((state) => state.auth);
  const handleDeleteEvent = (id, name) => {
    swal({
      title: "ELIMINAR EVENTO",
      text: `Estas seguro de eliminar el evento ${name} `,
      icon: "warning",
      buttons: ["No", "Si"],
    }).then(async (res) => {
      if (res && islogin.isAuthenticated) {
        dispatch(deleteEvent(id));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // window.location.reload()
        // navigate(`/profile/${id}`);
        swal({
          title: "EVENTO ELIMINADO",
          text: `Evento  ${name} eliminado con exito`,
          icon: "success",
          buttons: "Aceptar",
        });
      }
    });
  };

  return (
    <>
      {errorId &&
      (errorId === EM_NO_USER_ID || errorId.includes(EM_SYNTAX_ID)) ? (
        <Error404></Error404>
      ) : (
        <div className="container">
          <div className="portada-profile">
            <img src={coverPhoto} alt="" />
            <div className="rating-g">4.3</div>
          </div>
          <div className="prim-profile">
            <div className="prim-ocupacion">
              <div className="foto-ocupacion">
                <img
                  className="foto-profile"
                  src={profilePhoto}
                  alt="Foto de perfil del artista"
                />
              </div>
            </div>

            <div className="info-perfil">
              <div className="nombre-btns">
                <div className="anotherNombreBtns">
                  <div className="nombre">
                    <span>
                      <h1 className="profileNombre">
                        {name}
                        {/*  {lastname} */}
                        {verified && (
                          <img
                            className="verificado"
                            src="https://static.vecteezy.com/system/resources/previews/014/296/309/non_2x/blue-verified-social-media-account-icon-approved-profile-sign-illustration-vector.jpg"
                            alt="verificado paa"
                          />
                        )}
                      </h1>
                    </span>
                    {!isCurrentUser &&
                      <div className="profileFollow">
                        <button className="btn-profile" onClick={handleFollow}>
                          {followed ? "dejar de seguir" : "seguir"}
                          {/* {followed ? "dejar de seguir" : "seguir"} */}
                        </button>
                        <button className="btn-profile" onClick={handleContact}>
                          Contactar
                        </button>
                      </div>
                    }
                  </div>
                  <h3 className="principalInfo">
                    {city}, {Country}
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
                  </h3>
                </div>
              </div>

              <div className="stas-profile">
                <div className="btn-div">
                  <button className="btn-stas" onClick={scrollToEventos}>
                    {events?.length + " "} Eventos{" "}
                    {/*  //! muestra total de eventos del artista */}
                  </button>
                  <button className="btn-stas">
                    {followers?.length + " "} Seguidores
                  </button>
                  <h4>{followings?.length + " "} Seguidos</h4>
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
              <div className="ab-re">
                <div className="aboutme">{aboutMe}</div>
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
                  {showEditPassword && (
                    <UpdatePassword handleEdit={handleEdit} />
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="div-eventos">
            <div ref={eventosRef} className="titulo-ev">
              Mis eventos
            </div>
            <div className="div-eventos-profile">
              {events?.map((event, index) => (
                <CardsEvents
                  key={index}
                  id_art={event.id_Artist}
                  name_art={event.name}
                  event={event}
                  handleDeleteEvent={handleDeleteEvent}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;