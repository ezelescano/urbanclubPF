import axios from 'axios';
import './Conversation.css'
import React, { useEffect, useState } from 'react'

function Conversation({conversation, currentUser}) {

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

  return (
    <div className='conversation'>
      <img className='conversationImg' src={user?.profilePhoto} alt='imagen de perfil'/>
      <span className='conversationName'>{user?.name}</span>
    </div>
  )
}

export default Conversation