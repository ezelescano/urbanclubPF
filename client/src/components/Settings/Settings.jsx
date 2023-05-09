import style from "./settings.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Settings({
  handleDeleteAccount,
  handleLogout,
  handleShowEdit,
  handlePasswordChange,
  handleShowCreateEvent,
}) {
  return (
    <div className={style.settingsContainer}>
      {/* <NavLink className='navlink-st' to='/ProfileEdit'>
      <div className="div-settings">Editar perfil</div>
      </NavLink> */}
      <div className={style.divSettings}>
        <button onClick={handleShowEdit}>Editar perfil</button>
      </div>
      <div className={style.divSettings}>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className={style.divSettings}>
        <button onClick={handlePasswordChange}>Cambiar contraseña</button>
      </div>

      <div className={style.divSettings}>
        <button onClick={handleShowCreateEvent}>Crear evento</button>
      </div>
      <NavLink to="/updatePassword/:id" />
      <div className={style.divSettingsD}>
        <button onClick={handleDeleteAccount}>Eliminar Cuenta</button>
      </div>
    </div>
  );
}

export default Settings;
