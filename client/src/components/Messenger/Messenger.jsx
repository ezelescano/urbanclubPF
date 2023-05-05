import "./Messenger.css"
import React from 'react'
import Conversation from "../Conversation/Conversation"
import Message from "../Message/Message"
import ChatOnline from "../ChatOnline/ChatOnline"

function Messenger() {
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput"/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message/>
            <Message own={true}/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
          </div>
          <div className="chatBoxBottom">
            <textarea className="chatMessageInput" placeholder="write something..."></textarea>
            <button className="chatSubmitButton">Send</button>
          </div>
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