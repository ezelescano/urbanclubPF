import './Message.css'
import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js'
import axios from 'axios'

function Message({ message, own, userPhoto }) {
  const [photo, setPhoto] = useState("")
  
  useEffect(() => {
    const getPhoto =  async () => {
      try {
        const res =  await axios(`/artist/${userPhoto}`) 
        setPhoto(res.data.profilePhoto)
      } catch (err) {
        console.log(err)
      }
    }
    getPhoto();
  },[userPhoto])

  //console.log(photo)

  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
        {own ? 
        <>
        <p className='messageText'>{message.text}</p>
        <img className='messageImg' src={photo} alt='imagen de perfil'/>
        </>
        :<>
        <img className='messageImg' src={photo} alt='imagen de perfil'/>
        <p className='messageText'>{message.text}</p>
        </>
        }
      </div>
      <div className='messageBottom'>{format(message.createdAt)}</div>
    </div>
  )
}

export default Message