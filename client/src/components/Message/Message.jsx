import './Message.css'
import React from 'react'
import { format } from 'timeago.js'

function Message({message, own}) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
      <img className='messageImg' src='https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg' alt='imagen de perfil'/>
      <p className='messageText'>{message?.text}</p>
      </div>
      <div className='messageBottom'>{format(message?.createdAt)}</div>
    </div>
  )
}

export default Message