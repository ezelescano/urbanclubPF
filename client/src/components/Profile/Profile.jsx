import "./profile.css";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistId } from "../../redux/artistSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.artist.usuario);

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

  useEffect(() => {
    dispatch(getArtistId(id));
  }, [dispatch]);

  return (
    <div className="container">
      <div>
        <div className="portada-profile">
          <img src={coverPhoto} alt="" />
        </div>
        <div className="prim-profile">
          <div className="foto-nombre">
            <img
              className="foto-profile"
              src={profilePhoto}
              alt="no se jaja x2"
            />
            <div className="nombre">
              <h1>
                {name} {lastname}
              </h1>
              {/* para saber si es verificado funcion aun no implementada */}
              {/* {verified &&
                  <img className='verificado' src='https://static.vecteezy.com/system/resources/previews/014/296/309/non_2x/blue-verified-social-media-account-icon-approved-profile-sign-illustration-vector.jpg' alt='verificado paa' />
                } */}
            </div>
            <h3>
              {city}, {Country}
            </h3>
            <div className="ocupation-container">
              {/* {usuario.ocupation?.map(o => {
                return(
                  <div className='ocupation'>{o}</div>
                )
              })} */}
              {ocupation && <div className="ocupation">{ocupation}</div>}
            </div>
          </div>
          <div className="stas-btns">
            <div className="btns">
              <NavLink to={`/profileEdit/${id}`}>
                <button className="btn-profile">Seguir</button>
              </NavLink>
              <NavLink to="/chat">
                <button className="btn-profile">Contactar</button>
              </NavLink>
            </div>

            <div className="stas-profile">
              <h4>5 Seguidores</h4>
              <h4>5 Seguidores</h4>
              <h4>5 Likes</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-re">
        <div className="aboutme">
          <p>{aboutMe}</p>
        </div>
        <div className="redes">
          {usuario.links?.map((l) => {
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
      <div className="titulo-ev">Eventos</div>
      <div>
        {/* {usuario.eventos?.map(el => {
          return (
            <div>
              <Cards info={el}/>
            </div>
          )
        })} */}
      </div>
    </div>
  );
};

export default Profile;
