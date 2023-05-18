import "./Messenger.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import Conversation from "../Conversation/Conversation";
import Message from "../Message/Message";
import Chats from "../Chats/Chats";
import { useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import DetailBar from "../DetailBar/DetailBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { URLS } from "../../env";

function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [arrivalConversations, setArrivalConversations] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArraivalMessage] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const [showOnlines, setShowOnlines] = useState(false);
  const [showOfflines, setShowOfflines] = useState(false);
  const [friends, setFriends] = useState([]);
  const artistas = useSelector((state) => state.artist.allUsuarios);
  const socket = useRef();
  const user = useSelector((state) => state.auth.user);
  const scrollRef = useRef();
  const offlineFriends = friends.filter((friend) => {
    return !onlineUser.some((user) => {
      return user.id === friend.id;
    });
  });

  useEffect(() => {
    // socket.current = io("ws://pruebaback-production-0050.up.railway.app");
    socket.current = io(URLS);
    socket.current.on("getMessage", (data) => {
      setArraivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
    socket.current.on("getConversation", (data) => {
      setArrivalConversations({
        id: data.id,
        members: data.members,
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) =>
        Array.isArray(prev) ? [...prev, arrivalMessage] : [arrivalMessage]
      );
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    arrivalConversations &&
      !conversations?.find((conv) => conv.id === arrivalConversations.id) &&
      setConversations((prev) => [...prev, arrivalConversations]);
  }, [arrivalConversations, conversations]);

  //cambiar cuando hayan followers
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(`artist/followings/${user.id}`);
      setFriends(res.data);
    };
    getFriends();
  }, [user.id]);

  useEffect(() => {
    socket.current.emit("addUser", user.id);
    socket.current.on("getUsers", (users) => {
      setOnlineUser(
        friends.filter((f) => users.some((u) => u.userId === f.id))
      );
      /* setOnlineUser(users) */
    });
    return () => {
      //le paso un return cuando se desmonta
      socket.current.emit("disconnectSocket");
    };
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
    /*  const interval = setInterval(() => { */
    const getmessages = async () => {
      try {
        const res = await axios.get(`/message/${currentChat?.id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getmessages();
    /* }, 1500);

  return () => {
    clearInterval(interval);
  }; */
  }, [currentChat]);

  const handleEmojiSelect = (emoji) => {
    setNewMessage(newMessage + emoji.native);
  };

  const handleOnBlur = () => {
    setShowPicker(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleShowOnlines = () => {
    setShowOnlines(!showOnlines);
  };

  const handleShowOfflines = () => {
    setShowOfflines(!showOfflines);
  };

  const handleDeleteConversation = (convId) => {
    setConversations(conversations.filter((c) => c.id !== convId));
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
          Conversaciones Activas
          {/* <input placeholder="Buscar amigos..." className="chatMenuInput"/> */}
          {Array.isArray(conversations) &&
            conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation
                  conversation={c}
                  currentUser={user}
                  handleDeleteConversation={handleDeleteConversation}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <DetailBar conversation={currentChat} currentUser={user} />
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
                  placeholder="Envia un mensaje..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
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
          <div className="listOnline">
            Conectados {` ( ${onlineUser.length} )`}
            <button className="listlinesbtn" onClick={handleShowOnlines}>
              <ExpandMoreIcon />
            </button>
          </div>
          {showOnlines && (
            <Chats
              onlineUser={onlineUser}
              currentId={user.id}
              setCurrentChat={setCurrentChat}
              setConversations={setConversations}
              online={true}
            />
          )}
          <div className="listOffline">
            Desconectados {` ( ${offlineFriends.length} )`}
            <button className="listlinesbtn" onClick={handleShowOfflines}>
              <ExpandMoreIcon />
            </button>
          </div>

          {showOfflines && (
            <Chats
              onlineUser={offlineFriends}
              currentId={user.id}
              setCurrentChat={setCurrentChat}
              setConversations={setConversations}
              online={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Messenger;