const app = require("./src/app");
const {sequelize} = require("./src/db");
require("dotenv").config();;
const {PORT} = process.env || process.env.PORT
app.listen(PORT, ()=>{

    sequelize.sync({alter: true});

    console.log(`Listening on port ${PORT}`);
});
