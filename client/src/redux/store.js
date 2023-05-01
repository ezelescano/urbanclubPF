import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { tokenMiddleware } from './tokenMiddleware';

import authReducer  from './authSlice';
import artistReducer from './artistSlice';

const rootReducer = {
  auth: authReducer,
  artist: artistReducer
}

const middleware = [...getDefaultMiddleware(), tokenMiddleware];

 const store = configureStore({
  reducer: rootReducer,
  middleware
});

export default store;