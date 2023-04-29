import { configureStore } from '@reduxjs/toolkit'

import authReducer  from './authSlice';
import artistReducer from './artistSlice';

 const store = configureStore({
  reducer: {
    auth: authReducer,
    artist: artistReducer
  },
});

export default store;