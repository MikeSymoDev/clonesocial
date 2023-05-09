import { configureStore } from "@reduxjs/toolkit";
import {reducer as userReducer} from './features/users/userSlice';
import {reducer as postsReducer} from './features/posts/postSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postsReducer
  },
});