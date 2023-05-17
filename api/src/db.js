const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const EventsCommentModel = require("./models/EventsCommentModel");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,DB_PORT } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   { logging: false }
// );

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect:'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
 logging: false 
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Artist, Event, Conversation, Message, Follow, EventComment } = sequelize.models;

// Country.belongsToMany(Activity, { through: "countries_activities" });

Artist.belongsToMany(Event, { through: "artists_events", onDelete: 'CASCADE' });
Event.belongsToMany(Artist, { through: "artists_events"});

//Relaciones chat
//Artistas-Conversation
Artist.belongsToMany(Conversation, { through: 'ArtistConversation' });
Conversation.belongsToMany(Artist, { through: 'ArtistConversation' });
//Conversation-Message
Conversation.hasMany(Message, { as: 'menssage', foreignKey: 'conversationId' });
Message.belongsTo(Conversation, { as: 'conversation', foreignKey: 'conversationId',onDelete: 'CASCADE' });
//Relaciones follow
Artist.hasMany(Follow, { foreignKey: 'following_Id', as: 'follower' });
Artist.hasMany(Follow, { foreignKey: 'follower_Id', as: 'following' });

//Comments-Events
Event.hasMany(EventComment, {as: 'eventComment', foreignKey: 'eventId' });
EventComment.belongsTo(Event, {as: 'event', foreignKey: 'eventId', onDelete: 'CASCADE'});



module.exports = {
  ...sequelize.models,
  sequelize,
};
