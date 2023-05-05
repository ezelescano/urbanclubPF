const {Artist} = require("../db")
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {artistById} = require("../Controllers/artistControllers/artistById")
const generateJWT = require("../../utils/generateJWT")

require("dotenv").config();
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env;

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/artist/auth/google/callback",
      passReqToCallback: true
  },
  async (req, accessToken, refreshToken, profile, done) => {
console.log(profile)
    const newArtist = await Artist.findOne({
        where: {
          email : profile._json.email,
      }
    })

  if(newArtist) {
          const artist = await artistById(newArtist.id)
          artist.token =  generateJWT(artist.id, artist.name)
          done(null,artist)
    } else {

      const artistByGoogle = await Artist.create({

          name : profile.name.givenName,
          lastname: profile.name.familyName,
          email : profile._json.email,
          nickName: profile.name.familyName.substring(0,3) + profile.name.givenName.substring(0,3) + Math.floor(Math.random() * 1000),
          password: '',
          profilePhoto : profile._json.picture
    })
    
    artistByGoogle.token = generateJWT(artistByGoogle.id, artistByGoogle.name);
    await artistByGoogle.save();
    
    done(null, artistByGoogle)

    }
  }
));


passport.serializeUser((artist, done) => {
  done(null, artist.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const artist = await Artist.findById(id);
    return done(null, artist);
  } catch (error) {
    return done(error);
  }
});


module.exports = passport