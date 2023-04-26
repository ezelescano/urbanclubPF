import axios from "axios";

export default function postartist(payload) {
  return async function (dispatch) {
    var result = await axios.post("http://localhost:3001/artists", payload);
    return result;
  };
}
