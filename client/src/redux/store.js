import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { tokenMiddleware } from './tokenMiddleware';

import authReducer  from './authSlice';
import artistReducer from './artistSlice';
import eventReducer from './eventSlice'

const rootReducer = {
  auth: authReducer,
  artist: artistReducer,
  events: eventReducer
}

const middleware = [...getDefaultMiddleware(), tokenMiddleware];

 const store = configureStore({
  reducer: rootReducer,
  middleware
});

export default store;