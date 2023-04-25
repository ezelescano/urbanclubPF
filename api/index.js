const app = require("./src/app");
const {sequelize} = require("./src/db");

app.listen(3009, ()=>{

    sequelize.sync({alter: true});

    console.log('Listening on port 3001');

});
