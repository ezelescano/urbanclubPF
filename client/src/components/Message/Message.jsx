import './Message.css'
import React from 'react'

function Message({own}) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
      <img className='messageImg' src='https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg' alt='imagen de perfil'/>
      <p className='messageText'>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de</p>
      </div>
      <div className='messageBottom'>1 hour</div>
    </div>
  )
}

export default Message