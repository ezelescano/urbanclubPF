import "./settings.css";
import React from 'react'
import { NavLink, } from 'react-router-dom'

function Settings({handleDeleteAccount, handleLogout, handleShowEdit, handlePasswordChange,handleShowCreateEvent}) {
  
  return (
    <div className='settings-container'>
      {/* <NavLink className='navlink-st' to='/ProfileEdit'>
      <div className="div-settings">Editar perfil</div>
      </NavLink> */}
      <div className="div-settings"><button onClick={handleShowEdit}>Editar perfil</button></div>
      <div className="div-settings"><button onClick={handleLogout}>Logout</button></div>
      <div className="div-settings"><button onClick={handlePasswordChange}>Cambiar contraseña</button></div>
      <div className="div-settings"><button onClick={handleShowCreateEvent}>Crear evento</button></div> 
      <NavLink to="/updatePassword/:id" />
      <div className="div-settings-d"><button onClick={handleDeleteAccount}>Eliminar Cuenta</button></div> 
      
      
    </div>
  )
}

export default Settings