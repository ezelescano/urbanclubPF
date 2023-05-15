import axios from 'axios';
import './DetailBar.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DetailBar({ conversation, currentUser }) {

  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  

useEffect(() => {
  const friendId = conversation.members.find(m => m !== currentUser.id);

  const getUser =  async () => {
    try {
      const res =  await axios(`/artist/${friendId}`) 
      setUser(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  getUser();
},[currentUser, conversation])

const handleOnClick = () => {
  navigate(`/profile/${user.id}`)
}

  return (
    <div className='detailBar' onClick={handleOnClick}>
      <div className='detailBarUser'>
      <img className='detailBarImg' src={user?.profilePhoto} alt='imagen de perfil'/>
      <span className='detailBarName'>{user?.name}</span>
      </div>
    </div>
  )
}

export default DetailBar