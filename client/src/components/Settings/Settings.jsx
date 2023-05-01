import "./settings.css";
import React from 'react'
import { NavLink, } from 'react-router-dom'

function Settings({handleDeleteAccount, handleLogout}) {
  
  return (
    <div className='settings-container'>
      <div className="div-settings"><NavLink className='navlink-st' to='/ProfileEdit'>Editar perfil</NavLink></div>
      <div className="div-settings"><button onClick={handleLogout}>Logout</button></div>
      <div className="div-settings-d"><button onClick={handleDeleteAccount}>Eliminar Cuenta</button></div>
    </div>
  )
}

export default Settings