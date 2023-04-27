import React from 'react'
import { useState } from 'react'

const ProfileEdit = ({inputArtist}) => {

const { name,
        lastname,
        email, 
        profilePhoto, 
        coverPhoto, 
        nickName,
        country,
        city,
        ocupation,
        aboutMe,
        links} = inputArtist

const [input, setInput] = useState({
  name: {name},
  lastname: {lastname},
  email: {email},
  profilePhoto: {profilePhoto},
  coverPhoto: {coverPhoto},
  nickName: {nickName},
  country: {country},
  city: {city},
  ocupation: {ocupation},
  aboutMe: {aboutMe},
  links: {links}
})

const handleImage = (e) => {
  e.preventEvent()
}

  return (
    <div>
      <button onClick={handlePoner}>
        <img src={input.coverPhoto} alt='portada'/>
      </button>
      <div className='profile-foto-p'>
        <button>
          <img src={input.profilePhoto} alt='portada'/> 
        </button>
        <p>{name}</p>
      </div>

    </div>
  )
}

export default ProfileEdit