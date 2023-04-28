import axios from "axios";
import { POST_ARTIST } from "./index";

export default function postartist(payload) {
  return async function (dispatch) {
    // var result = await axios.post("http://localhost:3001/artist", payload); // Este va a tener un get unicamente en getAllArtist copiar y pegar.
    // return dispatch({ type: POST_ARTIST, payload: result });
    // // axios
    // //   .post("http://localhost:3001/artist", payload)
    // //   .then((res) => {
    // //     console.log(res);
    // //     return dispatch({ type: POST_ARTIST, payload: res });
    // //   })
    // //   .catch((errors) => errors);
    const result = await axios.post("http://localhost:3001/artist", payload);
    console.log(result.data);
    // console.log(result)

    return dispatch({ type: POST_ARTIST, payload: result.data });
  };
}
