import "./profile.css";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
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
import { logout, loginUpdatePhoto } from "../../redux/authSlice";
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
import axios from "axios";
import FollowList from "../FollowList/FollowList";
import VerifiedIcon from "@mui/icons-material/Verified";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmptyCard from "../Cards/CardsEvents/EmptyCard";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { io } from "socket.io-client";
import { URLS } from "../../env";
const socket = io(URLS);

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usuario = useSelector((state) => state.artist.usuario);
  const currentUser = useSelector((state) => state.auth);
  const errorId = useSelector((state) => state.artist.errorId);

  const [showSettings, setShowSettings] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [followed, setFollowed] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [showComponents, setShowComponents] = useState(false);
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
    followings,
  } = usuario;
  const ocupationArray = ocupation && ocupation.length && ocupation.split(",");

  const { id } = useParams();
  const eventosRef = useRef(null);

  useEffect(() => {
    const getFollowers = async () => {
      try {
        const res = await dispatch(getArtistId(id));
        setFollowers(res.followers);
      } catch (error) {
        console.log(error);
      }
    };
    getFollowers();
    return () => {
      //le paso un return cuando se desmonta
      dispatch(clearProfile());
      setFollowers([]);
      setShowFollowings(false);
      setShowFollowers(false);
    };
  }, [id]);

  useEffect(() => {
    if (!isCurrentUser) {
      const getUser = async () => {
        try {
          const res = await axios.get("/artist/login/me");
          //const res = await axios.get(`/artist/4`)
          //console.log(res.data.followings)
          setFollowed(
            res.data.followings.some(
              (follow) => follow.following_Id === usuario?.id
            )
          );
        } catch (error) {
          console.log(error);
        }
      };
      getUser();
    }
  }, [usuario.id, isCurrentUser]);

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
    setShowEdit(false);
    setShowEditPassword(false);
    setShowComponents(!showComponents);
  };

  const handleShowEdit = () => {
    setShowEditPassword(false);
    setShowEdit(!showEdit);
  };

  const handlePasswordChange = () => {
    setShowEdit(false);
    setShowEditPassword(!showEditPassword);
  };

  const handleShowCreateEvent = () => {
    navigate(`/createevent/${id}`);
  };

  const handleOnBlur = () => {
    setShowSettings(false);
  };

  const handleDeleteAccount = () => {
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

  const handleEdit = async (input) => {
    const artistUpdated = dispatch(updateArtist(id, input)).data;
    console.log(input);
    swal({
      title: "PERFIL ACTUALIZADO",
      text: `Tu perfil se ha actualizado con exito`,
      icon: "success",
      buttons: "Aceptar",
    }).then((res) => {
      // if (res) window.location.reload();
      //porque estaba este windows realoaded?, quite este codigo y volvio a funcar el cambio de foto en navbar
    });
    handleSettings();
    // setShowEdit(!showEdit);
    // setShowSettings(!showSettings);
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

  const handleFollow = async () => {
    try {
      if (!followed && !isCurrentUser && currentUser.isAuthenticated) {
        await axios.post(`/artist/follow/${currentUser.user.id}/follow`, {
          followedId: `${usuario.id}`,
        });
        const obj = { follower_Id: currentUser.user.id };
        setFollowers([...followers, obj]);
        setFollowed(!followed);
        return;
      }
      if (followed && !isCurrentUser && currentUser.isAuthenticated) {
        await axios.post(`/artist/follow/${currentUser.user.id}/unfollow`, {
          followedId: `${usuario.id}`,
        });
        setFollowers(
          followers.filter(
            (follow) => follow.follower_Id !== currentUser.user.id
          )
        );
        setFollowed(!followed);
        return;
      }
      swal({
        title: "INICIAR SESIÓN",
        text: `Inicia sesión para poder seguir a ${name}`,
        icon: "info",
        buttons: {
          cancel: "Cancelar",
          confirm: "Iniciar sesión",
        },
      }).then((value) => {
        if (value) {
          navigate("/login");
        } else {
          return;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleContact = async () => {
    if (currentUser.isAuthenticated && !isCurrentUser) {
      const { data } = await axios.get(
        `/conversation/${currentUser.user.id}/${usuario.id}`
      );
      const obj = {
        id: data.id,
        members: data.members,
      };
      socket.emit("newConversation", obj);
      navigate("/messenger");
      return;
    }
    swal({
      title: "INICIAR SESIÓN",
      text: `Inicia sesión para poder hablar con ${name}`,
      icon: "info",
      buttons: {
        cancel: "Cancelar",
        confirm: "Iniciar sesión",
      },
    }).then((value) => {
      if (value) {
        navigate("/login");
      } else {
        return;
      }
    });
  };

  const handleDeleteEvent = (id, name) => {
    swal({
      title: "ELIMINAR EVENTO",
      text: `Estas seguro de eliminar el evento ${name} `,
      icon: "warning",
      buttons: ["No", "Si"],
    }).then(async (res) => {
      if (res && currentUser.isAuthenticated) {
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

  const handleOnClickFollowers = () => {
    setShowFollowers(!showFollowers);
    setShowFollowings(false);
  };

  const handleOnClickFollowings = () => {
    setShowFollowings(!showFollowings);
    setShowFollowers(false);
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
                        {/* {verified && <VerifiedIcon />} */}
                      </h1>
                    </span>
                    {!isCurrentUser && (
                      <div className="profileFollow">
                        <button
                          className={
                            followed ? "btn-profile-act" : "btn-profile"
                          }
                          onClick={handleFollow}
                        >
                          {followed ? "Dejar de seguir" : "Seguir"}
                        </button>
                        <button className="btn-profile" onClick={handleContact}>
                          Contactar
                        </button>
                      </div>
                    )}
                  </div>
                  <h3 className="principalInfo">
                    {city || Country ? (
                      `${city}, ${Country}`
                    ) : (
                      <div>
                        Paradero Desconocido{" "}
                        <LocationOnIcon style={{ color: "white" }} />
                      </div>
                    )}
                    <div className="ocupation-container">
                      {ocupationArray &&
                        ocupationArray.map((ocupation) => (
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
                    <div className="btn-stas-text">
                      <div className="btn-stas-number">
                        {events?.length + " "}
                      </div>{" "}
                      Eventos
                    </div>{" "}
                    {/*  //! muestra total de eventos del artista */}
                  </button>
                  <button className="btn-stas" onClick={handleOnClickFollowers}>
                    <div className="btn-stas-text">
                      <div className="btn-stas-number">
                        {followers?.length + " "}{" "}
                      </div>
                      Seguidores
                    </div>
                  </button>
                  {showFollowers && (
                    <FollowList
                      userId={usuario.id}
                      isCurrentUser={isCurrentUser}
                      action="followers"
                      setShowFollowers={setShowFollowers}
                      setShowFollowings={setShowFollowings}
                    />
                  )}
                  <button
                    className="btn-stas"
                    onClick={handleOnClickFollowings}
                  >
                    <div className="btn-stas-text">
                      <div className="btn-stas-number">
                        {followings?.length + " "}
                      </div>
                      Seguidos
                    </div>
                  </button>
                  {showFollowings && (
                    <FollowList
                      userId={usuario.id}
                      isCurrentUser={isCurrentUser}
                      action="followings"
                      setShowFollowers={setShowFollowers}
                      setShowFollowings={setShowFollowings}
                    />
                  )}
                </div>
                <div className="redes">
                  {links?.map((l, index) => {
                    return (
                      <div key={{ index }} className="redes-div">
                        <h4>Otras redes!!</h4>
                        <div className="container-links">
                          {l.youtube && (
                            <a
                              href={l.youtube}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="youtube"
                            >
                              <YouTubeIcon />
                            </a>
                          )}

                          {l.twitter && (
                            <a
                              href={l.twitter}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="twitter"
                            >
                              <TwitterIcon />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="ab-re">
                <div className="aboutme">
                  {aboutMe
                    ? aboutMe
                    : "Hola! Soy parte de Urbanclub, a gran o pequeña medida :)"}
                </div>
              </div>
            </div>
            <div className="btns">
              {isCurrentUser ? (
                <div className="settings-div">
                  <button className="btn-ajustes" onClick={handleSettings}>
                    <SettingsIcon />
                  </button>
                  {(showSettings || showEdit || showEditPassword) &&
                    showComponents && (
                      <Settings
                        handleDeleteAccount={handleDeleteAccount}
                        handleLogout={handleLogout}
                        handlePasswordChange={handlePasswordChange}
                        handleShowEdit={handleShowEdit}
                        handleShowCreateEvent={handleShowCreateEvent}
                      />
                    )}
                  {showEdit && showComponents && (
                    <ProfileEdit
                      handleEdit={handleEdit}
                      id={id}
                      usuario={usuario}
                      handleShowEdit={handleShowEdit}
                    />
                  )}
                  {showEditPassword && showComponents && (
                    <UpdatePassword handleEdit={handleEdit} 
                                    handlePasswordChange={handlePasswordChange}/>
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
              {events && events.length > 0 ? (
                <div className="div-eventos-profile">
                  {events.map((event, index) => (
                    <CardsEvents
                      key={index}
                      id_art={event.id_Artist}
                      name_art={event.name}
                      event={event}
                      handleDeleteEvent={handleDeleteEvent}
                    />
                  ))}
                </div>
              ) : (
                <EmptyCard id={id} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
