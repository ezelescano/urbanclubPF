const socketio = require("socket.io");
const {URL_FRONT} = require("../src/env")
module.exports = function (server) {
  const io = socketio(server, {
    pingTimeout: 6000,
    cors: {
      // origin: "https://tecnoeam.com",https://tecnoeam.com/urbanclub/
      origin: URL_FRONT,

    },
  });

  let users = [];


const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
    console.log(users)
};

const removeUser = (socketId) => {
  console.log(socketId)
  users = users.filter((user) => user.socketId !== socketId);
  console.log(users)
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

const getUserConv = (userIds) => {
  return users.filter((user) => userIds.includes(user.userId));
};

io.on("connection", (socket) => {
  //cuando te conectas
  console.log("a user connected")
  //toma el userId y sockedId from user
  
  socket.on("addUser", userId =>{
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
  console.log({ senderId, receiverId, text });
  const user = getUser(receiverId);
  if (user && user.socketId) {
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  } else {
    console.log("User not found or missing socketId.");
  }
});

socket.on("newConversation", ({ id, members }) => {
  const users = getUserConv(members);
  users.forEach((user) => {
    if (user.socketId) {
      io.to(user.socketId).emit("getConversation", {
        id,
        members,
      });
    }
  });
});

  //when disconnect
  socket.on("disconnectSocket", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
  });

  return io;
};

