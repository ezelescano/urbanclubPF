import "./Messenger.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import Conversation from "../Conversation/Conversation";
import Message from "../Message/Message";
import ChatOnline from "../ChatOnline/ChatOnline";
import { useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArraivalMessage] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  //cambiar cuando hayan followers
  //const[followers, setFollowers] = useState([]);
  const artistas = useSelector((state) => state.artist.allUsuarios);
  const socket = useRef();
  const user = useSelector((state) => state.auth.user);
  const scrollRef = useRef();
  const followers = artistas.filter((f) => f.id !== user.id);

  useEffect(() => {
    socket.current = io("ws://localhost:3001");
    socket.current.on("getMessage", (data) => {
      setArraivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  //cambiar cuando hayan followers
  /*  useEffect(() => {
    const getFollowers = async() =>{
      const res = await axios.get("/artist");
      setFollowers(res.data.filter((f) => f.id !== user.id))
    }
    getFollowers()
  },[]) */

  useEffect(() => {
    socket.current.emit("addUser", user.id);
    socket.current.on("getUsers", (users) => {
      setOnlineUser(
        followers.filter((f) => users.some((u) => u.userId === f.id))
      );
      /* setOnlineUser(users) */
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/conversation/${user.id}`);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user.id]);

  useEffect(() => {
    const getmessages = async () => {
      try {
        const res = await axios.get(`/message/${currentChat?.id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getmessages();
  }, [currentChat]);

  const handleEmojiSelect = (emoji) => {
    setNewMessage(newMessage + emoji.native);
  };

  const handleOnBlur = () => {
    setShowPicker(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage) {
      const message = {
        sender: user.id,
        text: newMessage,
        conversationId: currentChat.id,
      };

      const receiverId = currentChat.members.find(
        (member) => member !== user.id
      );

      socket.current.emit("sendMessage", {
        senderId: user.id,
        receiverId,
        text: newMessage,
      });

      try {
        const res = await axios.post("/message", message);
        setMessages([...messages, res.data]);
        setNewMessage("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          {/* <input placeholder="Buscar amigos..." className="chatMenuInput"/> */}
          {Array.isArray(conversations) &&
            conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {Array.isArray(messages) &&
                  messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message
                        message={m}
                        own={parseInt(m.sender) === user.id}
                        userPhoto={m.sender}
                        /*  friendPhoto={artistas.find((f) =>  f.id === m.sender)} */
                      />
                    </div>
                  ))}
              </div>
              <div className="chatBoxBottom">
                <button
                  onClick={() => setShowPicker(!showPicker)}
                  className="emojiesBox"
                >
                  <SentimentVerySatisfiedIcon />
                </button>
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <div className="emojieBoxForAbsolute">
                  {showPicker && (
                    <Picker
                      data={data}
                      emojiSize={20}
                      emojiButtonSize={28}
                      onEmojiSelect={handleEmojiSelect}
                      /* onClickOutside={handleOnBlur} */
                      style={{ position: "absolute" }}
                    />
                  )}
                </div>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  Enviar
                </button>
              </div>
            </>
          ) : (
            <span className="noConversationText">
              Abre una conversacion para empezar a chatear
            </span>
          )}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline
            onlineUser={onlineUser}
            currentId={user.id}
            setCurrentChat={setCurrentChat}
          />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
