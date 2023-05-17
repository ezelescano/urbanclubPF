import './Chats.css'
//import React, { useEffect, useState } from 'react'
import axios from "axios"
import { io } from "socket.io-client";
import { URLS } from "../../env";
const socket = io(URLS);

function ChatOnline({ onlineUser, currentId, setCurrentChat, online }) {

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
      const { data } = await axios.get(`/conversation/${currentId}/${user.id}`);

      const obj = {
        id: data.id,
        members: data.members
      }
      socket.emit("newConversation", obj);
      setCurrentChat(data);
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
        <span className={online ? "chatOnlineBadge" : "chatOfflineBadge"}></span>
        </div>
        <div className="chatOnlineName">{o?.name}</div>
      </div>
      ))}
    </div>
  )
}

export default ChatOnline