import axios from "axios";
import { POST_ARTIST } from ".";

export default function postartist(payload) {
  console.log(payload);
  return async function (dispatch) {
    var result = await axios.post("http://localhost:3001/artist", payload); // Este va a tener un get unicamente en getAllArtist copiar y pegar.
    return dispatch({ type: POST_ARTIST, payload: result });
  };
}
