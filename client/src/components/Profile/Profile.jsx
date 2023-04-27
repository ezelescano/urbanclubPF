import './profile.css'
import React from "react";
import { NavLink } from "react-router-dom"

const Profile = () => {
  const usuario = {
    name: "Oscar",
    lastname: "Etiquetas",
    email: "soyoscar@gmail.com",
    profilePhoto:"https://avatars.githubusercontent.com/u/90626121?v=4",
    coverPhoto:"https://img.freepik.com/vector-gratis/ilustracion-abstracta-retratos-contemporaneos_107791-17266.jpg?w=1380&t=st=1682451734~exp=1682452334~hmac=1e0f7e24a688c9679048095dc6379d3b0dc5a8b77c2bb8c3b206978533b1a374",
    nickName: "Oscar sin Etiquetas",
    country:"Argentina",
    city:"Buenos aires",
    ocupation:["Delincuente", "Mago", "Artista"],
    aboutMe:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim animi nobis, tempora, facere ex dolorem magnam corporis excepturi nihil voluptates inventore perferendis, laboriosam velit. Facilis praesentium distinctio autem recusandae.",
    followers:3,
    verified: false,
    likes: 46,
   
    links: [{
      youtube: "https://www.youtube.com/el perfil",
      twitter: "https://twitter.com/"
    }
    ],
    eventos: [{
      
    }]
    
  }

  return (
    <div className='container'>
      <div>
        <img  className="portada-profile" src={usuario.coverPhoto} alt="no se jaja" />

        <div className='prim-profile'>
          <div className='foto-nombre'>
              <img className='foto-profile' src={usuario.profilePhoto} alt='no se jaja x2' />   
              <div className='nombre'>
                <h1>{usuario.nickName}</h1>
                {/* para saber si es verificado funcion aun no implementada */}
                {usuario.verified &&
                  <img className='verificado' src='https://static.vecteezy.com/system/resources/previews/014/296/309/non_2x/blue-verified-social-media-account-icon-approved-profile-sign-illustration-vector.jpg' alt='verificado paa' />
                }
              </div>
              <h3>{usuario.city}, {usuario.country}</h3>
              <div className='ocupation-container'>
              {usuario.ocupation?.map(o => {
                return(
                  <div className='ocupation'>{o}</div>
                )
              })}
              </div>
          </div>
          <div className='stas-btns'>
            <div className='btns'>
              <NavLink to="/profileEdit">
                <button className='btn-profile' >Seguir</button>
              </NavLink>
              <NavLink to="/chat">
                <button className='btn-profile' >Contactar</button>
              </NavLink>
              </div> 

              <div className='stas-profile'>
                <h4>{usuario.followers} Seguidores</h4>
                <h4>{usuario.followers} Seguidores</h4>
                <h4>{usuario.likes} Likes</h4>
              </div>
          </div>
        </div>

      </div>
      <div className='ab-re'>
        <div className='aboutme'>
          <p>{usuario.aboutMe}</p>
        </div>
        <div className='redes'>
          {usuario.links?.map(l => {
            return(
              <div className='redes-div'>
                <h4>Otras redes!!</h4>
                <div className='container-links'>
                {l.youtube && <a href={l.youtube} target="_blank" rel="noreferrer noopener"><img className='icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBkoHVpJNDq7zkN5eqjnF31QVBGPb7hloyw&usqp=CAU' alt='ds'/></a>}
                
                {l.twitter && <a href={l.twitter} target="_blank" rel="noreferrer noopener"><img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Twitter.png' alt='ds'/></a>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='titulo-ev'>Eventos</div>
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
