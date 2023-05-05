import './ChatOnline.css'
import React from 'react'

function ChatOnline() {
  return (
    <div className='chatOnline'>
      <div className='chatOnlineFriend'>
        <div className="chatOnlineImgContainer">
        <img className='chatOnlineImg' src='https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg' alt='imagen de perfil'/>
        <span className="chatOnlineBadge"></span>
        </div>
        <div className="chatOnlineName">John Doe</div>
      </div>
    </div>
  )
}

export default ChatOnline