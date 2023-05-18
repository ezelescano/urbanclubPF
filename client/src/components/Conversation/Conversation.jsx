import axios from "axios";
import "./Conversation.css";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";

function Conversation({ conversation, currentUser, handleDeleteConversation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.id);

    const getUser = async () => {
      try {
        const res = await axios(`/artist/${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  const handleDelete = () => {
    swal({
      title: "ELIMINAR CONVERSACION",
      text: `Deseas eliminar la conversacion con ${user?.name}`,
      icon: "warning",
      buttons: ["No", "Si"],
    }).then(async (res) => {
      if (res) {
        const response = await axios.delete(`/conversation/${conversation.id}`);
        handleDeleteConversation(conversation.id);
      }
    });
  };

  return (
    <div className="conversation">
      <div className="conversationleft">
        <img
          className="conversationImg"
          src={user?.profilePhoto}
          alt="imagen de perfil"
        />
        <span className="conversationName">{user?.name}</span>
      </div>
      <button className="conversationBtn" onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Conversation;
