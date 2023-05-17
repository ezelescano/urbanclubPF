/* const app = require("./src/app");
const {sequelize} = require("./src/db");
require("dotenv").config();;
const {PORT} = process.env || process.env.PORT
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);


app.listen(PORT, ()=>{

    sequelize.sync({force: true});

    console.log(`Listening on port ${PORT}`);
}); */


const { truncate } = require("fs-extra");
const app = require("./src/app");
const { sequelize } = require("./src/db");
 const http = require("http");
 const server = http.createServer(app);
 require("./socket/server")(server); // Aquí se requiere el archivo que contiene la lógica de Socket.io

require("dotenv").config();

const { PORT } = process.env || process.env.PORT;

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Listening on port ${PORT}`);
  });
});

