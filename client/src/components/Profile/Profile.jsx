import './profile.css'
import React from "react";

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
    ocupation:"Delincuente",
    aboutMe:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim animi nobis, tempora, facere ex dolorem magnam corporis excepturi nihil voluptates inventore perferendis, laboriosam velit. Facilis praesentium distinctio autem recusandae.",
    followers:3
  }

  return (
    <div>
      <div>
        <img  className="portada-profile" src={usuario.coverPhoto} alt="no se jaja" />

        <div className='foto-nombre'>
          <img className='foto-profile' src={usuario.profilePhoto} alt='no se jaja x2' />
          <div className='info-profile'>
            <div className='nombre'>
              <h1>Oscar sin Etiquetas</h1>
              <div className='verificado-div'>
                <img className='verificado' src='https://static.vecteezy.com/system/resources/previews/014/296/309/non_2x/blue-verified-social-media-account-icon-approved-profile-sign-illustration-vector.jpg' alt='verificado paa' />
                <p>Artista verificado</p>
              </div>
            </div>
            <div className='seguidores'>
            <h4>{usuario.followers} Seguidores</h4>
            <button className='btn-profile'>Seguir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
