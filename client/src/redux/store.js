import { configureStore } from '@reduxjs/toolkit'

import artistReducer from './artistSlice';


 const store = configureStore({
  reducer: {
    artist: artistReducer
  },
});

export default store;