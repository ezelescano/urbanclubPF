import "./Messenger.css"
import React, { useEffect, useRef, useState } from 'react'
import Conversation from "../Conversation/Conversation"
import Message from "../Message/Message"
import ChatOnline from "../ChatOnline/ChatOnline"
import { useSelector } from "react-redux";
import axios from "axios"

function Messenger() {
  const[conversations, setConversations] = useState([]);
  const[currentChat, setCurrentChat] = useState(null);
  const[messages, setMessages] = useState([]);
  const[newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    const getConversations = async () =>{
      try {
        const res = await axios.get(`/conversation/${user.id}`)
        setConversations(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getConversations();
  }, [user.id])

  useEffect(() => {
    const getmessages = async() =>{
      try {
        const res = await axios.get(`/message/${currentChat?.id}`);
        setMessages(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getmessages()
  }, [currentChat]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const message = {
      sender: user.id,
      text:newMessage,
      conversationId: currentChat.id
    };

    try {
      const res = await axios.post('/message', message)
      setMessages([...messages, res.data])
      setNewMessage("");
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth"})
  }, [messages])


  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput"/>
          {Array.isArray(conversations) && conversations.map(c => (
            <div onClick={()=> setCurrentChat(c)}>
              <Conversation conversation={c} currentUser={user}/>
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ?  (
          <>
            <div className="chatBoxTop">
              { Array.isArray(messages) && messages.map(m => (
                <div ref={scrollRef}>
                  <Message message={m} own={parseInt(m.sender) === user.id}/>
                </div>
              ))}
            </div>
            <div className="chatBoxBottom">
              <textarea className="chatMessageInput" 
                        placeholder="write something..." 
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}></textarea>
              <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
            </div>
          </> ) :(<span className="noConversationText">Abre una conversacion para empezar a chatear</span>)}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline/>
        </div>
      </div>
    </div>
  )
}

export default Messenger