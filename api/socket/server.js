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
  };

  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };

  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  }; 


  io.on("connection", (socket) => {
    //cuando te conectas
    console.log("a user connected")
    //toma el userId y sockedId from user
    socket.on("addUser", userId =>{
      addUser(userId, socket.id);
      io.emit("getUsers", users);
    });

    //cunado se envia y recibes un mensaje
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
      const user = getUser(receiverId);
      if (user && user.socketId) {
        io.to(user.socketId).emit("getMessage", {
          senderId,
          text,
        });
      }
    });

    //cuando se desconecta
    socket.on("disconnect", () => {
      console.log("a user disconnected!");
      removeUser(socket.id);
      io.emit("getUsers", users);
    });
  });

  return io;
};
