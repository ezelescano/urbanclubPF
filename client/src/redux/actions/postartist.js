import axios from "axios";
import { POST_ARTIST } from ".";

export default function postartist(payload) {
  
  const formData = new FormData();
  // formData.append('file', file);
  Object.keys(payload).forEach(key => {
    
    formData.append(key, payload[key]);
  });
 
//  console.log(file)
 
  return async function (dispatch) {
    // var result = await axios.post("http://localhost:3001/artist", payload);
    // axios
    //   .post("http://localhost:3008/artist", payload)
    //   .then((res) => {
    //     console.log(res)
    //     return dispatch({ type: POST_ARTIST, payload: res });
    //   })
    //   .catch((errors) => errors);
  const result = await axios.post("http://localhost:3008/artist", payload)
  console.log(result)
    // console.log(result)
    
     return dispatch({ type: POST_ARTIST, payload: result });
  };
}
