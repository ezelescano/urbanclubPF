import './ChatOnline.css'
//import React, { useEffect, useState } from 'react'
import axios from "axios"

function ChatOnline({ onlineUser, currentId, setCurrentChat }) {

  /* const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
   const getFriends = async() => {
    const res = await axios.get("/artist");
    setFriends(res.data)
   }
   getFriends()
  },[]) 

  useEffect(() => {

    setOnlineFriends(friends.filter((f) => onlineUser.includes(f.id)));
  },[friends, onlineUser]) */
  

  const handleClick = async(user) => {
    try {
      const res = await axios.get(`/conversation/${currentId}/${user.id}`);
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className='chatOnline'>
      {onlineUser.map(o => (
      <div className='chatOnlineFriend' onClick={() => {handleClick(o)}}>
        <div className="chatOnlineImgContainer">
        <img className='chatOnlineImg' src={o?.profilePhoto} alt='foto perfil'/>
        <span className="chatOnlineBadge"></span>
        </div>
        <div className="chatOnlineName">{o?.name}</div>
      </div>
      ))}
    </div>
  )
}

export default ChatOnline