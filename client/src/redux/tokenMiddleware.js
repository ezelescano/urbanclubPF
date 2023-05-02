import axios from 'axios';
//import { useSelector } from 'react-redux';

/* const tokenMiddleware = (store) => (next) => (action) => {
  const token = store.getState().auth.token;
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
  next(action);
};

export default tokenMiddleware; */

export const tokenMiddleware = (store) => (next) => (action) => {
  //const token = useSelector(state => state.auth.token);
  //const token = store.getState().auth.token
  const token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    //store.dispatch(setToken(token));
  }

  return next(action);
};

//export default tokenMiddleware;
