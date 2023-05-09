import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../axios';

const fetchPosts = createAsyncThunk("posts/fetch", async (_, { getState }) => {
  const { user } = getState();

  const response = await axiosInstance.get("/social/posts?limit=10");

  return [...response.data.results];
});




const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },

  reducers: {
    setPosts: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    [fetchPosts.pending]: (state, action) => {
      state.data = [];
      state.loading = true;
      state.error = false;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

const reducer = postsSlice.reducer;
const setPosts = postsSlice.actions.setPosts;

export { setPosts, fetchPosts, reducer };
